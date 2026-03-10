import { Component, OnInit, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TitleCasePipe } from '@angular/common';
import { GradesData, Student, Course, EvalItem, GRADE_LABELS } from './models/grades.model';

@Component({
  selector: 'app-grades-viewer',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './grades-viewer.component.html',
  styleUrl: './grades-viewer.component.scss',
})
export class GradesViewerComponent implements OnInit {
  readonly data = signal<GradesData | null>(null);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  readonly selectedCourseKey = signal<string | null>(null);
  readonly selectedStudent = signal<Student | null>(null);
  readonly searchQuery = signal('');
  readonly searchVisible = signal(false);

  readonly modalComment = signal<string | null>(null);

  readonly courseKeys = computed(() => {
    const d = this.data();
    return d ? Object.keys(d.courses) : [];
  });

  readonly selectedCourse = computed(() => {
    const d = this.data();
    const key = this.selectedCourseKey();
    return d && key ? d.courses[key] : null;
  });

  readonly filteredStudents = computed(() => {
    const course = this.selectedCourse();
    const q = this.searchQuery().trim().toLowerCase();
    if (!course) return [];
    if (!q) return course.students;
    return course.students.filter((s) =>
      s.name.toLowerCase().includes(q)
    );
  });

  readonly gradeLabels = GRADE_LABELS;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<GradesData>('/projects/grades-viewer/data/information.json')
      .subscribe({
        next: (d) => {
          this.data.set(d);
          this.loading.set(false);
          if (Object.keys(d.courses).length > 0 && !this.selectedCourseKey()) {
            this.selectedCourseKey.set(Object.keys(d.courses)[0]);
          }
        },
        error: (err) => {
          console.log('🚀 Rc_logger 🚀 | Grades data load error', err);
          this.error.set('No se pudo cargar la información de notas.');
          this.loading.set(false);
        },
      });
  }

  selectCourse(key: string): void {
    this.selectedCourseKey.set(key);
    this.selectedStudent.set(null);
    this.searchQuery.set('');
  }

  selectStudent(student: Student): void {
    this.selectedStudent.set(student);
  }

  closeStudentView(): void {
    this.selectedStudent.set(null);
  }

  openCommentModal(text: string): void {
    this.modalComment.set(text);
  }

  closeCommentModal(): void {
    this.modalComment.set(null);
  }

  onSearchInput(value: string): void {
    this.searchQuery.set(value);
  }

  toggleSearchVisibility(): void {
    this.searchVisible.update((v) => !v);
    if (!this.searchVisible()) {
      this.searchQuery.set('');
    }
  }

  getEvalKeys(evalObj: EvalItem): (keyof EvalItem)[] {
    return Object.keys(evalObj) as (keyof EvalItem)[];
  }

  hasComments(student: Student): boolean {
    return !!(student.comm1?.trim() || student.comm2?.trim());
  }

  getComments(student: Student): { label: string; text: string }[] {
    const comments: { label: string; text: string }[] = [];
    if (student.comm1?.trim()) {
      comments.push({ label: 'Comentario 1', text: student.comm1 });
    }
    if (student.comm2?.trim()) {
      comments.push({ label: 'Comentario 2', text: student.comm2 });
    }
    return comments;
  }

  splitName(name: string): [string, string] {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length <= 1) return [name, ''];
    const mid = Math.ceil(words.length / 2);
    const top = words.slice(0, mid).join(' ');
    const bottom = words.slice(mid).join(' ');
    return [top, bottom];
  }
}
