import { Component } from '@angular/core';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
