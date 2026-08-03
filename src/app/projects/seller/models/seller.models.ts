export type SellerEntryKind = 'debe' | 'deposito';

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
  createdAt: string;
  updatedAt: string;
}
