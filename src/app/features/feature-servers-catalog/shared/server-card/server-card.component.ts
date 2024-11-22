import {Component, input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-server-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink
  ],
  templateUrl: './server-card.component.html',
  styleUrl: './server-card.component.scss'
})
export class ServerCardComponent {
  public isMy = input.required<boolean>();
}
