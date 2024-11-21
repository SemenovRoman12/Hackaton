import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {FooterComponent} from "@core/layout/footer/footer.component";
import {HeaderComponent} from "@core/layout/header/header.component";

@Component({
  selector: 'unauthorized-user-layout',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './unauthorized-user-layout.component.html',
  styleUrl: './unauthorized-user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnauthorizedUserLayoutComponent {

}
