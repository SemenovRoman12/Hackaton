import {ChangeDetectionStrategy, Component, inject, output,} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {BackHomeUiComponent} from "@shared/back-home-ui/back-home-ui.component";
import {FormUiComponent} from "@shared/form-ui/form-ui.component";
import {SignAuthUser} from "@core/auth/data-access/models/sign.auth.model";
import {MatFabButton} from "@angular/material/button";
import {FormType} from "@models/form.model";

@Component({
  selector: 'login-form-ui',
  standalone: true,
  imports: [
    MatError,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    BackHomeUiComponent,
    FormUiComponent,
    MatFabButton
  ],
  templateUrl: './login-form-ui.component.html',
  styleUrl: './login-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormUiComponent {
  public login = output<SignAuthUser>();
  private readonly fb = inject(FormBuilder);
  public readonly title = 'Вход';

  public readonly loginForm: FormGroup<FormType<SignAuthUser>> = this.fb.group({
    email: ['', [Validators.required, Validators.email],],
    password: ['', [Validators.required],],
  });

  public onLogin() {
    if(this.loginForm.valid) {
      const userData: SignAuthUser = {
        email: this.loginForm.value.email as string,
        password: this.loginForm.value.password as string,
      };
      this.login.emit(userData);
    }
  }
}
