import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public year = new Date().getFullYear();
  public version: string;

  private readonly _deploy:number;
  private readonly _features:number;
  constructor() {
    this._deploy = 8;
    this._features = 1
    this.version = `0.${this._features}.${this._deploy}`;
  }

}
