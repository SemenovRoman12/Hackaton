import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from "@angular/material/card";
import {MatDialogClose, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-support-content',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle,
    NgIf
  ],
  templateUrl: './support-content.component.html',
  styleUrl: './support-content.component.scss'
})
export class SupportContentComponent {

}
