import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-support-card',
  standalone: true,
    imports: [
        MatCard,
        MatCardContent,
        MatIcon
    ],
  templateUrl: './support-card.component.html',
  styleUrl: './support-card.component.scss'
})
export class SupportCardComponent {

}
