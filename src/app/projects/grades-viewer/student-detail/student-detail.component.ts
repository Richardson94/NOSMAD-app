import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { GradesDataService } from '../services/grades-data.service';
import { Student, EvalItem, GRADE_LABELS } from '../models/grades.model';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss',
})
export class StudentDetailComponent implements OnInit {
  readonly modalComment = signal<string | null>(null);
  readonly gradeLabels = GRADE_LABELS;

  readonly courseKey = signal('');
  readonly studentId = signal(0);

  readonly student = computed(() => {
    const key = this.courseKey();
    const id = this.studentId();
    return key && id ? this.gradesService.getStudent(key, id) : null;
  });

  readonly course = computed(() => {
    const key = this.courseKey();
    return key ? this.gradesService.getCourse(key) : null;
  });

  readonly hasPrev = computed(() =>
    !!this.gradesService.getPrevStudent(this.courseKey(), this.studentId())
  );
  readonly hasNext = computed(() =>
    !!this.gradesService.getNextStudent(this.courseKey(), this.studentId())
  );

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public gradesService: GradesDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const key = params.get('courseKey');
      const id = params.get('studentId');
      this.courseKey.set(key ?? '');
      this.studentId.set(id ? parseFloat(id) : 0);
    });
  }

  goBack(): void {
    this.router.navigate(['/grades-viewer']);
  }

  goPrev(): void {
    const prev = this.gradesService.getPrevStudent(this.courseKey(), this.studentId());
    if (prev) {
      this.navigateToStudent(prev.id);
    }
  }

  goNext(): void {
    const next = this.gradesService.getNextStudent(this.courseKey(), this.studentId());
    if (next) {
      this.navigateToStudent(next.id);
    }
  }

  private navigateToStudent(id: number): void {
    this.router.navigate(['/grades-viewer', 'student', this.courseKey(), id.toString()]);
  }

  getEvalKeys(evalObj: EvalItem): (keyof EvalItem)[] {
    return Object.keys(evalObj) as (keyof EvalItem)[];
  }

  hasComments(student: Student): boolean {
    return !!(student.comm1?.trim() || student.comm2?.trim());
  }

  getComments(student: Student): { label: string; text: string }[] {
    const comments: { label: string; text: string }[] = [];
    if (student.comm1?.trim()) comments.push({ label: 'Comentario 1', text: student.comm1 });
    if (student.comm2?.trim()) comments.push({ label: 'Comentario 2', text: student.comm2 });
    return comments;
  }

  openCommentModal(text: string): void {
    this.modalComment.set(text);
  }

  closeCommentModal(): void {
    this.modalComment.set(null);
  }
}
