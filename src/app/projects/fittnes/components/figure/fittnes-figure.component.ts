import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FITTNES_PART_BY_ID } from '../../data/fittnes-parts';
import type { FittnesPartId, FittnesPartStatus } from '../../models/fittnes.models';

interface FigureTape {
  id: FittnesPartId;
  cx: number;
  cy: number;
  rx: number;
}

interface FigureTag {
  id: FittnesPartId;
  y: number;
  side: 'left' | 'right';
  edge: number;
}

/** Coordinates follow the 576×1024 drawing in assets/fittnes/body-front.jpg. */
const TAPES: FigureTape[] = [
  { id: 'neck', cx: 287, cy: 184, rx: 31 },
  { id: 'chest', cx: 287, cy: 262, rx: 86 },
  { id: 'biceps', cx: 177, cy: 322, rx: 23 },
  { id: 'biceps', cx: 396, cy: 322, rx: 23 },
  { id: 'forearm', cx: 161, cy: 405, rx: 23 },
  { id: 'forearm', cx: 411, cy: 405, rx: 23 },
  { id: 'wrist', cx: 149, cy: 482, rx: 14 },
  { id: 'wrist', cx: 424, cy: 482, rx: 14 },
  { id: 'waist', cx: 286, cy: 392, rx: 68 },
  { id: 'hip', cx: 286, cy: 492, rx: 86 },
  { id: 'thigh', cx: 235, cy: 572, rx: 37 },
  { id: 'thigh', cx: 338, cy: 572, rx: 37 },
  { id: 'calf', cx: 225, cy: 745, rx: 31 },
  { id: 'calf', cx: 348, cy: 745, rx: 31 },
];

const TAGS: FigureTag[] = [
  { id: 'biceps', y: 322, side: 'left', edge: 154 },
  { id: 'forearm', y: 405, side: 'left', edge: 138 },
  { id: 'wrist', y: 482, side: 'left', edge: 135 },
  { id: 'thigh', y: 572, side: 'left', edge: 198 },
  { id: 'calf', y: 745, side: 'left', edge: 194 },
  { id: 'neck', y: 184, side: 'right', edge: 318 },
  { id: 'chest', y: 262, side: 'right', edge: 373 },
  { id: 'waist', y: 392, side: 'right', edge: 354 },
  { id: 'hip', y: 492, side: 'right', edge: 372 },
];

const FULL = { x: -100, y: 30, w: 776, h: 950 };
const ZOOM = { w: 440, h: 330 };

@Component({
  selector: 'app-fittnes-figure',
  standalone: true,
  templateUrl: './fittnes-figure.component.html',
  styleUrl: '../../styles/fittnes.scss',
})
export class FittnesFigureComponent {
  @Input() active: FittnesPartId | null = null;
  @Input() marks: Partial<Record<FittnesPartId, FittnesPartStatus>> = {};
  @Input() tappable = false;
  @Input() zoom = false;
  @Output() pick = new EventEmitter<FittnesPartId>();

  readonly tapes = TAPES;
  readonly tags = TAGS;
  readonly leftDotX = 96;
  readonly rightDotX = 476;

  viewBox(): string {
    const focus = this.active ? TAPES.find((tape) => tape.id === this.active) : undefined;
    if (!this.zoom || !focus) {
      return `${FULL.x} ${FULL.y} ${FULL.w} ${FULL.h}`;
    }
    const top = Math.min(Math.max(focus.cy - ZOOM.h / 2, FULL.y), FULL.y + FULL.h - ZOOM.h);
    return `${287 - ZOOM.w / 2} ${top} ${ZOOM.w} ${ZOOM.h}`;
  }

  name(id: FittnesPartId): string {
    return FITTNES_PART_BY_ID.get(id)?.name ?? id;
  }

  ry(tape: FigureTape): number {
    return Math.max(6, Math.round(tape.rx * 0.18));
  }

  status(id: FittnesPartId): FittnesPartStatus | 'active' {
    if (id === this.active) {
      return 'active';
    }
    return this.marks[id] ?? 'empty';
  }

  tap(id: FittnesPartId): void {
    if (this.tappable) {
      this.pick.emit(id);
    }
  }
}
