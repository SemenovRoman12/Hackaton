import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {BackHomeUiComponent} from "../../../shared/back-home-ui/back-home-ui.component";
import {FormUiComponent} from "../../../shared/form-ui/form-ui.component";
import {AuthFacadeService} from "@core/auth/data-access/services/auth.facade.service";
import {NewUser, SignAuthUser} from "@core/auth/data-access/models/sign.auth.model";
import {MatFabButton} from "@angular/material/button";

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
  @Output() login = new EventEmitter();
  private readonly fb = inject(FormBuilder);
  public readonly title = 'Вход';

  public readonly loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email],],
    password: ['', [Validators.required],],
  });

  public onLogin(userData: SignAuthUser) {
    this.login.emit(this.loginForm.value);
  }
}
