import {Component, input} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {Server} from "@features/feature-servers-catalog/models/server.model";

@Component({
  selector: 'app-support-card',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatIcon,
        MatButton,
        MatCardActions,
        MatCardTitle,
        RouterLink
    ],
  templateUrl: './support-card.component.html',
  styleUrl: './support-card.component.scss'
})
export class SupportCardComponent {
}
