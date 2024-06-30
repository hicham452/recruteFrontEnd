import { Component } from '@angular/core';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-maindemo',
  standalone: true,
  imports: [
    CountUpModule
  ],
  templateUrl: './maindemo.component.html',
})
export class MaindemoComponent {

}
