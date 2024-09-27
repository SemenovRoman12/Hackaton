import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'back-home',
  standalone: true,
  imports: [
    MatIconButton,
    MatIcon
  ],
  templateUrl: './back-home.component.html',
  styleUrl: './back-home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackHomeComponent {

  private readonly router = inject(Router);

  public onBackToHome() {
    return this.router.navigate(['/guest/home']);
  }
}
