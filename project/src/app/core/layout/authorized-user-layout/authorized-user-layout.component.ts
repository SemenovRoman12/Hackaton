import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FooterComponent} from "@core/layout/footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "@core/layout/header/header.component";

@Component({
  selector: 'app-authorized-user-layout',
  standalone: true,
  imports: [
    FooterComponent,
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './authorized-user-layout.component.html',
  styleUrl: './authorized-user-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizedUserLayoutComponent {

}
