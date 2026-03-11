import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GradesData, Student, Course } from '../models/grades.model';

@Injectable({ providedIn: 'root' })
export class GradesDataService {
  private readonly data = signal<GradesData | null>(null);
  private readonly loading = signal(false);
  private readonly error = signal<string | null>(null);

  readonly gradesData = this.data.asReadonly();
  readonly isLoading = this.loading.asReadonly();
  readonly loadError = this.error.asReadonly();

  readonly courseKeys = computed(() => {
    const d = this.data();
    return d ? Object.keys(d.courses) : [];
  });

  private readonly storageKey = 'nosmad-grades-viewer-data';
  private readonly jsonUrl = '/projects/grades-viewer/data/information.json';

  constructor(private http: HttpClient) {
    this.restoreFromStorage();
  }

  setData(d: GradesData): void {
    this.data.set(d);
    this.loading.set(false);
    this.error.set(null);
    this.saveToStorage(d);
  }

  loadDemo(): void {
    this.loading.set(true);
    this.error.set(null);
    this.http.get<GradesData>(this.jsonUrl).subscribe({
      next: (d) => {
        this.setData(d);
      },
      error: () => {
        this.error.set('No se pudo cargar la información de notas.');
        this.loading.set(false);
      },
    });
  }

  private saveToStorage(d: GradesData): void {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(this.storageKey, JSON.stringify(d));
    } catch {
      // ignore storage errors
    }
  }

  private restoreFromStorage(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) return false;
      const parsed = JSON.parse(raw) as GradesData;
      if (!parsed || !parsed.courses) return false;
      this.data.set(parsed);
      this.loading.set(false);
      this.error.set(null);
      return true;
    } catch {
      return false;
    }
  }

  getCourse(key: string): Course | null {
    const d = this.data();
    return d?.courses[key] ?? null;
  }

  getStudent(courseKey: string, studentId: number): Student | null {
    const course = this.getCourse(courseKey);
    return course?.students.find((s) => s.id === studentId) ?? null;
  }

  getStudentIndex(courseKey: string, studentId: number): number {
    const course = this.getCourse(courseKey);
    if (!course) return -1;
    return course.students.findIndex((s) => s.id === studentId);
  }

  getPrevStudent(courseKey: string, studentId: number): Student | null {
    const idx = this.getStudentIndex(courseKey, studentId);
    if (idx <= 0) return null;
    const course = this.getCourse(courseKey);
    return course?.students[idx - 1] ?? null;
  }

  getNextStudent(courseKey: string, studentId: number): Student | null {
    const idx = this.getStudentIndex(courseKey, studentId);
    const course = this.getCourse(courseKey);
    if (!course || idx < 0 || idx >= course.students.length - 1) return null;
    return course.students[idx + 1];
  }
}
