import {ChangeDetectionStrategy, Component} from '@angular/core';
import {
  UnauthorizedUserLayoutComponent
} from "@core/layout/unauthorized-user-layout/unauthorized-user-layout.component";
import {MatIcon} from "@angular/material/icon";
import {FooterComponent} from "@core/layout/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    UnauthorizedUserLayoutComponent,
    MatIcon,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

}
