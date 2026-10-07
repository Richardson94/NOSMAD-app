export type FittnesSex = 'm' | 'f';

export type FittnesPartId =
  | 'wrist'
  | 'neck'
  | 'chest'
  | 'biceps'
  | 'forearm'
  | 'waist'
  | 'hip'
  | 'thigh'
  | 'calf';

export interface FittnesProfile {
  name: string;
  age: number | null;
  heightCm: number | null;
  sex: FittnesSex | null;
}

export interface FittnesWeightEntry {
  kg: number;
  at: string;
}

export interface FittnesState {
  profile: FittnesProfile;
  weights: FittnesWeightEntry[];
  parts: Partial<Record<FittnesPartId, number>>;
  partsUpdatedAt: string | null;
  coins: number;
}

export type FittnesPartStatus = 'empty' | 'ok' | 'low' | 'high';

export interface FittnesFocus {
  id: FittnesPartId;
  name: string;
  status: FittnesPartStatus;
  detail: string;
  priority: number;
  minMm: number | null;
  maxMm: number | null;
}
