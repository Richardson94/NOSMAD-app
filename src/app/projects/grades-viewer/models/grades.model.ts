export interface EvalItem {
  L_ov: number;
  L_te: number;
  G_ov: number;
  G_te: number;
  V_ov: number;
  V_te: number;
  R_ov: number;
  R_te: number;
  W_ov: number;
  W_te: number;
  k1: number;
  abs: number;
}

export interface Student {
  id: number;
  name: string;
  eval1: EvalItem;
  eval2: EvalItem;
  comm1: string;
  comm2: string;
  goesTo: string;
}

export interface Course {
  teacher: string;
  schedule: string;
  bimester: string;
  students: Student[];
}

export interface GradesData {
  courses: Record<string, Course>;
}

export const GRADE_LABELS: Record<string, string> = {
  L_ov: 'Listening (L) ov',
  L_te: 'Listening (L) te',
  G_ov: 'Grammar (G) ov',
  G_te: 'Grammar (G) te',
  V_ov: 'Vocabulary (V) ov',
  V_te: 'Vocabulary (V) te',
  R_ov: 'Reading (R) ov',
  R_te: 'Reading (R) te',
  W_ov: 'Writing (W) ov',
  W_te: 'Writing (W) te',
  k1: 'Speaking (K)',
  abs: 'Asistencias (abs)',
};
