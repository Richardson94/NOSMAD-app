import { DOCUMENT } from '@angular/common';
import { Component, HostListener, OnDestroy, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.scss',
})
export class SidebarMenuComponent implements OnDestroy {
  menuOpen = false;
  private readonly destroy$ = new Subject<void>();
  private readonly document = inject(DOCUMENT);

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.closeMenu();
      });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    this.syncBodyScrollLock();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.syncBodyScrollLock();
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.menuOpen) {
      this.closeMenu();
    }
  }

  private syncBodyScrollLock(): void {
    this.document.body.style.overflow = this.menuOpen ? 'hidden' : '';
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
    this.destroy$.next();
    this.destroy$.complete();
  }
}
