import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

}
