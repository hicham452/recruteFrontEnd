import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-maindemo',
  standalone: true,
  imports: [
    CountUpModule,
    FooterComponent
  ],
  templateUrl: './maindemo.component.html',
})
export class MaindemoComponent {

}
