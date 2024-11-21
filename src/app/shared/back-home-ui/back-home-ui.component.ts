import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'back-home-ui',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './back-home-ui.component.html',
  styleUrl: './back-home-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackHomeUiComponent {

  private readonly router = inject(Router);

  public onBackToHome() {
    return this.router.navigate(['/guest/home']);
  }
}
