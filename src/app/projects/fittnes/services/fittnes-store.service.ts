import { Injectable, computed, signal } from '@angular/core';
import {
  FITTNES_BODY_COINS,
  FITTNES_PARTS,
  FITTNES_WEIGHT_COINS,
  fittnesBand,
} from '../data/fittnes-parts';
import type {
  FittnesFocus,
  FittnesPartId,
  FittnesProfile,
  FittnesState,
  FittnesWeightEntry,
} from '../models/fittnes.models';

const STORAGE_KEY = 'fittnes-v1';

export interface FittnesSaveResult {
  ok: boolean;
  message: string;
}

const EMPTY: FittnesState = {
  profile: { name: '', age: null, heightCm: null, sex: null },
  weights: [],
  parts: {},
  partsUpdatedAt: null,
  coins: 0,
};

@Injectable({ providedIn: 'root' })
export class FittnesStoreService {
  private readonly state = signal<FittnesState>(this.read());

  readonly snapshot = this.state.asReadonly();
  readonly coins = computed(() => this.state().coins);
  readonly profile = computed(() => this.state().profile);
  readonly parts = computed(() => this.state().parts);

  latestWeight(): FittnesWeightEntry | null {
    const weights = this.state().weights;
    return weights.length ? weights[weights.length - 1] : null;
  }

  bmi(): number | null {
    const weight = this.latestWeight();
    const height = this.state().profile.heightCm;
    if (!weight || !height) {
      return null;
    }
    const meters = height / 100;
    return Math.round((weight.kg / (meters * meters)) * 10) / 10;
  }

  bmiLabel(): string {
    const value = this.bmi();
    if (value === null) {
      return 'Falta peso o altura';
    }
    if (value < 18.5) {
      return 'Bajo';
    }
    if (value < 25) {
      return 'En rango';
    }
    if (value < 30) {
      return 'Sobrepeso';
    }
    return 'Obesidad';
  }

  focus(): FittnesFocus[] {
    const { sex } = this.state().profile;
    const wrist = this.state().parts.wrist;
    if (!sex || !wrist) {
      return [];
    }
    const bmi = this.bmi();
    const items: FittnesFocus[] = [];
    for (const part of FITTNES_PARTS) {
      if (part.id === 'wrist') {
        continue;
      }
      const value = this.state().parts[part.id];
      const band = fittnesBand(sex, wrist, part.id);
      if (!band) {
        continue;
      }
      if (value === undefined) {
        items.push({
          id: part.id,
          name: part.name,
          status: 'empty',
          detail: 'Sin medida',
          priority: 0.4,
          minMm: band.min,
          maxMm: band.max,
        });
        continue;
      }
      if (value < band.min && band.mode === 'build') {
        const gap = (band.min - value) / band.min;
        items.push({
          id: part.id,
          name: part.name,
          status: 'low',
          detail: `Por debajo. Objetivo ${band.min}–${band.max} mm.`,
          priority: gap,
          minMm: band.min,
          maxMm: band.max,
        });
      } else if (value > band.max && band.mode === 'trim') {
        const gap = (value - band.max) / band.max;
        const waistBoost = part.id === 'waist' ? (bmi !== null && bmi >= 25 ? 2 : 1.6) : 1.1;
        items.push({
          id: part.id,
          name: part.name,
          status: 'high',
          detail: `Por encima. Conviene bajarla hacia ${band.min}–${band.max} mm.`,
          priority: gap * waistBoost,
          minMm: band.min,
          maxMm: band.max,
        });
      } else {
        items.push({
          id: part.id,
          name: part.name,
          status: 'ok',
          detail: `En rango (${band.min}–${band.max} mm).`,
          priority: 0,
          minMm: band.min,
          maxMm: band.max,
        });
      }
    }
    return items.sort((a, b) => b.priority - a.priority);
  }

  missingParts(): FittnesPartId[] {
    const parts = this.state().parts;
    return FITTNES_PARTS.filter((part) => parts[part.id] === undefined).map((part) => part.id);
  }

  bandFor(id: FittnesPartId): { min: number; max: number } | null {
    const { sex } = this.state().profile;
    const wrist = this.state().parts.wrist;
    if (!sex || !wrist) {
      return null;
    }
    const band = fittnesBand(sex, wrist, id);
    return band ? { min: band.min, max: band.max } : null;
  }

  saveProfile(profile: FittnesProfile): FittnesSaveResult {
    const name = profile.name.trim().replace(/\s+/g, ' ');
    if (name.length > 20) {
      return { ok: false, message: 'El nombre puede tener hasta 20 letras.' };
    }
    if (profile.age === null || profile.age < 10 || profile.age > 100) {
      return { ok: false, message: 'Escribe una edad entre 10 y 100.' };
    }
    if (profile.heightCm === null || profile.heightCm < 120 || profile.heightCm > 230) {
      return { ok: false, message: 'Escribe una altura entre 120 y 230 cm.' };
    }
    if (!profile.sex) {
      return { ok: false, message: 'Elige hombre o mujer. Sirve para los rangos del cuerpo.' };
    }
    this.write({ ...this.state(), profile: { ...profile, name } });
    return { ok: true, message: '' };
  }

  saveWeight(kg: number): FittnesSaveResult {
    if (!Number.isFinite(kg) || kg < 30 || kg > 300) {
      return { ok: false, message: 'Escribe un peso entre 30 y 300 kg.' };
    }
    const rounded = Math.round(kg * 10) / 10;
    const latest = this.latestWeight();
    if (latest && latest.kg === rounded) {
      return { ok: true, message: '' };
    }
    const entry: FittnesWeightEntry = { kg: rounded, at: new Date().toISOString() };
    this.write({
      ...this.state(),
      weights: [...this.state().weights, entry].slice(-60),
      coins: this.state().coins + FITTNES_WEIGHT_COINS,
    });
    return { ok: true, message: '' };
  }

  savePart(id: FittnesPartId, mm: number | null): FittnesSaveResult {
    const current = this.state().parts[id];
    if (mm === null) {
      return current === undefined
        ? { ok: false, message: 'Escribe la medida en milímetros.' }
        : { ok: true, message: '' };
    }
    if (!Number.isFinite(mm) || mm < 80 || mm > 2000) {
      return { ok: false, message: 'Escribe un valor entre 80 y 2000 mm.' };
    }
    const rounded = Math.round(mm);
    if (current === rounded) {
      return { ok: true, message: '' };
    }
    const parts = { ...this.state().parts, [id]: rounded };
    const complete = FITTNES_PARTS.every((part) => parts[part.id] !== undefined);
    this.write({
      ...this.state(),
      parts,
      partsUpdatedAt: new Date().toISOString(),
      coins: this.state().coins + (complete ? FITTNES_BODY_COINS : 0),
    });
    return { ok: true, message: '' };
  }

  private read(): FittnesState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return EMPTY;
      }
      const parsed = JSON.parse(raw) as FittnesState;
      return {
        ...EMPTY,
        ...parsed,
        profile: { ...EMPTY.profile, ...parsed.profile },
        parts: parsed.parts ?? {},
        weights: parsed.weights ?? [],
      };
    } catch {
      return EMPTY;
    }
  }

  private write(next: FittnesState): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    this.state.set(next);
  }
}
