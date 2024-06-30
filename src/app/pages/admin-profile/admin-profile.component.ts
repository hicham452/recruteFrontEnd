import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [FooterComponent,
    CommonModule,
   NavbarComponent,
   SidebarComponent],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.scss'
})
export class AdminProfileComponent {
  darkTheme: boolean = false;
  sortByColumn(): void {
    console.log('Sorting column...');
  }
}
