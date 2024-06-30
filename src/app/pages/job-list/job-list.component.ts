import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {

}
