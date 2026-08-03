export type SellerEntryKind = 'debe' | 'deposito';

/** Bolivia's 9 departments (encomienda destinos). */
export const BOLIVIA_DEPARTMENTS = [
  'La Paz',
  'Santa Cruz',
  'Cochabamba',
  'Oruro',
  'Potosí',
  'Chuquisaca',
  'Tarija',
  'Beni',
  'Pando',
] as const;

export type BoliviaDepartment = (typeof BOLIVIA_DEPARTMENTS)[number];

export interface SellerEntry {
  id: string;
  /** Calendar day YYYY-MM-DD */
  date: string;
  /** Optional contact name */
  name?: string;
  /** Local phone digits / user input (Bolivia) */
  phone?: string;
  /** Amount in BOB (optional) */
  amount?: number | null;
  kind: SellerEntryKind;
  /** Encomienda / shipping flag */
  envio: boolean;
  /** Department when envio is true */
  departamento?: string;
  createdAt: string;
  updatedAt: string;
}
