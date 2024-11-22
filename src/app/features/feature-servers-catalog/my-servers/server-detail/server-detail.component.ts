import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-server-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatCard,
    MatCardHeader,
    MatDivider,
    MatCardContent

  ],
  templateUrl: './server-detail.component.html',
  styleUrl: './server-detail.component.scss'
})
export class ServerDetailComponent {

}
