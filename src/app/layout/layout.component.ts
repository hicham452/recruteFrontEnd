import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThemeService } from '../ThemeService/theme.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    SidebarComponent,
    RouterOutlet,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  darkTheme: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.darkTheme$.subscribe((darkTheme) => {
      this.darkTheme = darkTheme;
      this.updateBodyTheme();
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  private updateBodyTheme() {
    document.body.setAttribute('data-bs-theme', this.darkTheme ? 'dark' : 'light');
    this.updateCardClasses();
  }

  private updateCardClasses() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      if (this.darkTheme) {
        card.classList.remove('border-0', 'shadow-md');
        card.classList.add('border');
      } else {
        card.classList.remove('border');
        card.classList.add('border-0', 'shadow-md');
      }
    });
  }
}
