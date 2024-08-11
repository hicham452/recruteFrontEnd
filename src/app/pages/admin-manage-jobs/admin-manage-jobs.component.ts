import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-manage-jobs',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './admin-manage-jobs.component.html',
  styleUrl: './admin-manage-jobs.component.scss'
})
export class AdminManageJobsComponent implements OnInit {

  jobData: JobSorter = new JobSorter();
  darkTheme: boolean = false;

  ngOnInit() {
    this.jobData.initialize();
  }
}

export class JobSorter {
  sortBy: string = "";
  sortAsc: boolean = false;
  data: any[] = [
    { 'Title': 'Support IT Help Desk', 'Applications': '24', 'Date Expired': '06 Avril, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Actif</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/linkedin.png', 'Location': 'Casablanca', 'Salary': '1650 DH - 1820 DH' },
    { 'Title': 'Développeur Full Stack', 'Applications': '45', 'Date Expired': '29 Février, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Actif</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/flutter.jpg', 'Location': 'Marrakech', 'Salary': '1220 DH - 1250 DH' },
    { 'Title': 'Développeur React', 'Applications': '126', 'Date Expired': '24 Février, 2024', 'Status': '<span class="badge bg-danger-subtle text-danger">Inactif</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/react.jpg', 'Location': 'Rabat', 'Salary': '800 DH - 1300 DH' },
    { 'Title': 'Spécialiste Data Center', 'Applications': '78', 'Date Expired': '17 Février, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Actif</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/vue.jpg', 'Location': 'Tanger', 'Salary': '800 DH - 1300 DH' },
    { 'Title': 'Responsable Design Produit', 'Applications': '147', 'Date Expired': '08 Février, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Actif</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/flask.jpg', 'Location': 'Fès', 'Salary': '1490 DH - 1790 DH' },
    { 'Title': 'Responsable Marketing', 'Applications': '204', 'Date Expired': '08 Février, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Actif</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/shopify.jpg', 'Location': 'Agadir', 'Salary': '2530 DH - 4120 DH' },
    { 'Title': 'Responsable Design', 'Applications': '145', 'Date Expired': '26 Janvier, 2024', 'Status': '<span class="badge bg-danger-subtle text-danger">Inactif</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/flutter.jpg', 'Location': 'Oujda', 'Salary': '800 DH - 1300 DH' }
]


  sortedData: any[] = [];

  initialize() {
    this.sortedData = [...this.data];
  }

  sortByColumn(column: string) {
    if (this.sortBy === column) {
      this.sortAsc = !this.sortAsc;
    } else {
      this.sortBy = column;
      this.sortAsc = true;
    }
    this.sortData();
  }

  sortData() {
    this.sortedData = this.data.slice().sort((a, b) => {
      const valueA = a[this.sortBy];
      const valueB = b[this.sortBy];
      if (this.sortAsc) {
        return this.compareValues(valueA, valueB);
      } else {
        return this.compareValues(valueB, valueA);
      }
    });
  }

  compareValues(valueA: any, valueB: any) {
    if (valueA === valueB) {
      return 0;
    }
    return valueA < valueB ? -1 : 1;
  }
}

