import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';



@Component({
  selector: 'app-root',
  standalone: true,

  template: `
  <app-nav-bar></app-nav-bar>
  <router-outlet></router-outlet>
`,
  templateUrl: './app.component.html',
  imports: [RouterOutlet,NavBarComponent],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'zakat-app';
}
