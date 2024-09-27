import {ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {BackHomeComponent} from "../../../shared/back-home/back-home.component";
import {MatFabButton} from "@angular/material/button";
import {FormUiComponent} from "../../../shared/form-ui/form-ui.component";

@Component({
  selector: 'register-form-ui',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatError,
    MatLabel,
    BackHomeComponent,
    MatFabButton,
    FormUiComponent
  ],
  templateUrl: './register-form-ui.component.html',
  styleUrl: './register-form-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormUiComponent {
  @Output() register = new EventEmitter();
  public readonly title = 'Регистрация';
  private readonly fb = inject(FormBuilder);

  public readonly registerForm = this.fb.group({
    fio: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)] ],
  });

  public onRegister() {
    this.register.emit(this.registerForm.value);
  }
}
