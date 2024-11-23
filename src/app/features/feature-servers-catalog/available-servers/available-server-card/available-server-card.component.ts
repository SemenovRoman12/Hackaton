import {ChangeDetectionStrategy, Component, Input, input, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {Server} from "@features/feature-servers-catalog/models/server.model";

@Component({
  selector: 'available-server-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    RouterLink
  ],
  templateUrl: './available-server-card.component.html',
  styleUrl: './available-server-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailableServerCardComponent {
  public server = input.required<Server>();
}
