import {ChangeDetectionStrategy, Component,  inject, output,} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {BackHomeUiComponent} from "@shared/back-home-ui/back-home-ui.component";
import {MatFabButton} from "@angular/material/button";
import {FormUiComponent} from "@shared/form-ui/form-ui.component";
import {FormType} from "@models/form.model";
import {NewUser} from "@core/auth/data-access/models/sign.auth.model";

@Component({
  selector: 'register-form-ui',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatError,
    MatLabel,
    BackHomeUiComponent,
    MatFabButton,
    FormUiComponent
  ],
  templateUrl: './register-form-ui.component.html',
  styleUrl: './register-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormUiComponent {
  public register = output<NewUser>();
  public readonly title = 'Регистрация';
  private readonly fb = inject(FormBuilder);

  public readonly registerForm: FormGroup<FormType<NewUser>> = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  public onRegister() {
    if(this.registerForm.valid) {
      const userData: NewUser = {
        username: this.registerForm.value.username as string,
        email: this.registerForm.value.email as string,
        password: this.registerForm.value.password as string,
      };
      this.register.emit(userData);
    }
  }
}
