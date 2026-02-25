import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css',
})
export class SidebarMenuComponent {
  constructor(private router: Router) {}

  get showBackButton(): boolean {
    const tree = this.router.createUrlTree(['/welcome']);
    return !this.router.isActive(tree, true);
  }
}
