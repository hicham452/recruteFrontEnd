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
    { 'Title': 'IT Help Desk Support', 'Applications': '24', 'Date Expired': '06 April, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Active</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/linkedin.png', 'Location': 'Mexico', 'Salary': '$165 - $182' },
    { 'Title': 'Full Stack Developer', 'Applications': '45', 'Date Expired': '29 Feb, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Active</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/flutter.jpg', 'Location': 'California', 'Salary': '$122 - $125' },
    { 'Title': 'React Developer', 'Applications': '126', 'Date Expired': '24 Feb, 2024', 'Status': '<span class="badge bg-danger-subtle text-danger">UnActive</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/react.jpg', 'Location': 'Bermuda', 'Salary': '$80 - $130' },
    { 'Title': 'Data Center Specialist', 'Applications': '78', 'Date Expired': '17 Feb, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Active</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/vue.jpg', 'Location': 'Bermuda', 'Salary': '$80 - $130' },
    { 'Title': 'Product Design Manager', 'Applications': '147', 'Date Expired': '08 Feb, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Active</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/flask.jpg', 'Location': 'Germany', 'Salary': '$149 - $179' },
    { 'Title': 'Marketing Executive', 'Applications': '204', 'Date Expired': '08 Feb, 2024', 'Status': '<span class="badge bg-success-subtle text-success">Active</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/shopify.jpg', 'Location': 'Saudi Arabia', 'Salary': '$253 - $412' },
    { 'Title': 'Designer Head', 'Applications': '145', 'Date Expired': '26 Jan, 2024', 'Status': '<span class="badge bg-danger-subtle text-danger">Unactive</span>', 'Link': '#!', 'ApplicationsLink': '#!', 'ImageSrc': 'assets/images/company_logo/flutter.jpg', 'Location': 'Romania', 'Salary': '$80 - $130' }
  ];
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

