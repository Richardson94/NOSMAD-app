import { Component, OnInit, signal, computed, effect } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { GradesDataService } from './services/grades-data.service';
import { Student } from './models/grades.model';

@Component({
  selector: 'app-grades-viewer',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './grades-viewer.component.html',
  styleUrl: './grades-viewer.component.scss',
})
export class GradesViewerComponent implements OnInit {
  readonly selectedCourseKey = signal<string | null>(null);
  readonly searchQuery = signal('');
  readonly searchVisible = signal(false);

  readonly courseKeys = computed(() => this.gradesService.courseKeys());

  readonly selectedCourse = computed(() => {
    const key = this.selectedCourseKey();
    return key ? this.gradesService.getCourse(key) : null;
  });

  readonly filteredStudents = computed(() => {
    const course = this.selectedCourse();
    const q = this.searchQuery().trim().toLowerCase();
    if (!course) return [];
    if (!q) return course.students;
    return course.students.filter((s) => s.name.toLowerCase().includes(q));
  });

  constructor(
    private gradesService: GradesDataService,
    private router: Router
  ) {
    effect(
      () => {
        const loaded = !this.gradesService.isLoading();
        const keys = this.gradesService.courseKeys();
        const currentKey = this.selectedCourseKey();
        if (loaded && keys.length > 0 && !currentKey) {
          this.selectedCourseKey.set(keys[0]);
        }
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {}

  selectCourse(key: string): void {
    this.selectedCourseKey.set(key);
    this.searchQuery.set('');
  }

  onUpload(): void {
    // TODO: implementar carga desde archivo .txt
  }

  onDemo(): void {
    this.gradesService.loadDemo();
    this.selectedCourseKey.set(null);
  }

  selectStudent(student: Student): void {
    const key = this.selectedCourseKey();
    if (key) {
      this.router.navigate(['/grades-viewer', 'student', key, student.id.toString()]);
    }
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

  splitName(name: string): [string, string] {
    const words = name.trim().split(/\s+/).filter(Boolean);
    if (words.length <= 1) return [name, ''];
    const mid = Math.ceil(words.length / 2);
    const top = words.slice(0, mid).join(' ');
    const bottom = words.slice(mid).join(' ');
    return [top, bottom];
  }

  get loading() {
    return this.gradesService.isLoading;
  }

  get error() {
    return this.gradesService.loadError;
  }
}
