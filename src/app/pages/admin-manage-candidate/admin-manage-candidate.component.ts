import { Component, ViewChild } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SidebarComponent } from '../../layout/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-manage-candidate',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule,
    NgbModule,
    NavbarComponent,
    SidebarComponent
  ],
  templateUrl: './admin-manage-candidate.component.html',
  styleUrl: './admin-manage-candidate.component.scss'
})
export class AdminManageCandidateComponent {
  darkTheme: boolean = false;

  @ViewChild('content') content: any;

  constructor(private modalService: NgbModal) {}

  openCreateModal() {
    this.modalService.open(this.content, { ariaLabelledBy: 'createModalLabel' }).result.then((result) => {
      // Handle modal close
    }, (reason) => {
      // Handle modal dismiss
    });
  }
}
