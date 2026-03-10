import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { GradesDataService } from '../services/grades-data.service';
import { Student, EvalItem } from '../models/grades.model';

interface GradeTableGroup {
  name: string;
  cols?: { headers: string[]; keys: (keyof EvalItem)[] };
  single?: { key: keyof EvalItem };
}

const GRADE_TABLES: GradeTableGroup[] = [
  { name: 'Listening', cols: { headers: ['Ov', 'Te'], keys: ['L_ov', 'L_te'] } },
  { name: 'Grammar', cols: { headers: ['Ov', 'Te'], keys: ['G_ov', 'G_te'] } },
  { name: 'Vocabulary', cols: { headers: ['Ov', 'Te'], keys: ['V_ov', 'V_te'] } },
  { name: 'Reading', cols: { headers: ['Ov', 'Te'], keys: ['R_ov', 'R_te'] } },
  { name: 'Writing', cols: { headers: ['Ov', 'Te'], keys: ['W_ov', 'W_te'] } },
  { name: 'Speaking', single: { key: 'k1' } },
  { name: 'Absences', single: { key: 'abs' } },
];

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss',
})
export class StudentDetailComponent implements OnInit {
  readonly modalComment = signal<string | null>(null);
  readonly gradeTables = GRADE_TABLES;

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

  readonly activeTab = signal<1 | 2>(1);

  readonly showTopFinalGrade = computed(() => {
    const s = this.student();
    if (!s) return false;
    const g1 = this.getEvalGrade(s.eval1);
    const g2 = this.getEvalGrade(s.eval2);
    return g1 > 0 && g2 > 0;
  });

  readonly overallFinalGrade = computed(() => {
    const s = this.student();
    if (!s || !this.showTopFinalGrade()) return 0;
    const g1 = this.getEvalGrade(s.eval1);
    const g2 = this.getEvalGrade(s.eval2);
    return Math.round((g1 + g2) / 2);
  });

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
      this.activeTab.set(1);
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

  hasComment(student: Student, evalNum: 1 | 2): boolean {
    const comm = evalNum === 1 ? student.comm1 : student.comm2;
    return !!comm?.trim();
  }

  /** Calcula la nota final de una evaluación (0-100) a partir de Ov/Te (0-20 c/u) y k1 (0-100). */
  getEvalGrade(evalItem: EvalItem): number {
    const ovTeKeys: (keyof EvalItem)[] = ['L_ov', 'L_te', 'G_ov', 'G_te', 'V_ov', 'V_te', 'R_ov', 'R_te', 'W_ov', 'W_te'];
    const ovTeSum = ovTeKeys.reduce((s, k) => s + (evalItem[k] ?? 0), 0);
    const k1 = evalItem.k1 ?? 0;
    const maxOvTe = 200;
    const maxK1 = 100;
    const total = ovTeSum + k1;
    const maxTotal = maxOvTe + maxK1;
    return maxTotal > 0 ? Math.round((total / maxTotal) * 100) : 0;
  }

  openCommentModal(text: string): void {
    this.modalComment.set(text);
  }

  closeCommentModal(): void {
    this.modalComment.set(null);
  }
}
