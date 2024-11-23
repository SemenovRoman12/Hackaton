import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {SupportAddButtonComponent} from "@features/feature-servers-catalog/my-servers/support-add-button/support-add-button.component";

@Component({
  selector: 'app-server-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatCard,
    MatCardHeader,
    MatDivider,
    MatCardContent,
    MatButton,
    RouterLink,
    SupportAddButtonComponent
  ],
  templateUrl: './server-detail.component.html',
  styleUrl: './server-detail.component.scss'
})
export class ServerDetailComponent {

}
