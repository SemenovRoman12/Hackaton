import {Component, inject, input} from '@angular/core';
import {SupportCardComponent} from "@features/feature-supports/support-card/support-card.component";
import {Server} from "@features/feature-servers-catalog/models/server.model";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardActions, MatCardTitle} from "@angular/material/card";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'my-server-card',
  standalone: true,
  imports: [
    SupportCardComponent,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardTitle,
    RouterLink
  ],
  templateUrl: './my-server-card.component.html',
  styleUrl: './my-server-card.component.scss'
})
export class MyServerCardComponent {
  private readonly router = inject(Router);

  public server = input.required<Server>()

  public toDetails() {
    this.router.navigate([`my-servers/${this.server().ID}`])
  }
}
