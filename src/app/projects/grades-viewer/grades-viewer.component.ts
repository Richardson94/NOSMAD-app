import { Component, OnInit, ViewChild, ElementRef, signal, computed, effect } from '@angular/core';
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
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  private readonly storageKey = 'nosmad-grades-viewer-ui';

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

    effect(
      () => {
        if (typeof window === 'undefined') return;
        const state = {
          selectedCourseKey: this.selectedCourseKey(),
          searchQuery: this.searchQuery(),
          searchVisible: this.searchVisible(),
        };
        try {
          window.localStorage.setItem(this.storageKey, JSON.stringify(state));
        } catch {
          // ignore storage issues
        }
      },
      { allowSignalWrites: false }
    );
  }

  ngOnInit(): void {
    if (typeof window === 'undefined') return;
    try {
      const raw = window.localStorage.getItem(this.storageKey);
      if (!raw) return;
      const parsed = JSON.parse(raw) as {
        selectedCourseKey: string | null;
        searchQuery: string;
        searchVisible: boolean;
      };
      if (parsed) {
        if (parsed.selectedCourseKey) {
          this.selectedCourseKey.set(parsed.selectedCourseKey);
        }
        if (parsed.searchQuery) {
          this.searchQuery.set(parsed.searchQuery);
        }
        this.searchVisible.set(!!parsed.searchVisible);
      }
    } catch {
      // ignore restore errors
    }
  }

  selectCourse(key: string): void {
    this.selectedCourseKey.set(key);
    this.searchQuery.set('');
  }

  onUpload(): void {
    const input = this.fileInput?.nativeElement;
    if (!input || !input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const text = reader.result as string;
        const parsed = JSON.parse(text);
        const gradesData = parsed.courses ? { courses: parsed.courses } : parsed;
        // eslint-disable-next-line no-console
        console.log('🚀 Rc_logger 🚀 | Upload parsed backup');
        this.gradesService.setData(gradesData);
        this.selectedCourseKey.set(null);
        this.searchQuery.set('');
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('🚀 Rc_logger 🚀 | Upload parse error', err);
      } finally {
        input.value = '';
      }
    };

    reader.readAsText(file);
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
