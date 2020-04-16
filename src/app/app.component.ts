import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isMenuToggled: boolean = true;

  toggleMenu(): void {
    this.isMenuToggled = !this.isMenuToggled;
  }
}
