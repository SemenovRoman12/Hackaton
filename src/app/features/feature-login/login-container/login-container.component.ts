import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {LoginFormUiComponent} from "@features/feature-login/login-form-ui/login-form-ui.component";
import {SignAuthUser} from "@core/auth/data-access/models/sign.auth.model";
import {AuthFacadeService} from "@core/auth/data-access/auth.facade.service";
import {AuthService} from "@core/auth/data-access/services/auth.service";

@Component({
  selector: 'login-container',
  standalone: true,
  imports: [
    LoginFormUiComponent
  ],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {
  private readonly authService = inject(AuthService);
  private readonly authFacade = inject(AuthFacadeService);

  public onLogin(userData: SignAuthUser) {
    this.authService.loginService(userData);
    // this.authFacade.login(userData);
  }
}
