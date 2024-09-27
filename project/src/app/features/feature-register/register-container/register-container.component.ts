import {ChangeDetectionStrategy, Component, EventEmitter, inject} from '@angular/core';
import {RegisterFormUiComponent} from "@features/feature-register/register-form-ui/register-form-ui.component";
import {AuthFacadeService} from "@core/auth/data-access/auth.facade.service";
import {NewUser} from "@core/auth/data-access/+state/sign.auth.model";

@Component({
  selector: 'register-container',
  standalone: true,
  imports: [
    RegisterFormUiComponent,
  ],
  templateUrl: './register-container.component.html',
  styleUrl: './register-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainerComponent {
  private readonly authFacade = inject(AuthFacadeService);

  public onRegister(userData: NewUser) {
    this.authFacade.register(userData)
  };
}
