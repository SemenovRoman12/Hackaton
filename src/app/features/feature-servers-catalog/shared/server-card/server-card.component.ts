import {Component, input} from '@angular/core';
import {MatCard, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-server-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle
  ],
  templateUrl: './server-card.component.html',
  styleUrl: './server-card.component.scss'
})
export class ServerCardComponent {

}
