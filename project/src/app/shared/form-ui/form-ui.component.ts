import {Component, input} from '@angular/core';
import {BackHomeUiComponent} from "../back-home-ui/back-home-ui.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatFabButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-form-ui',
  standalone: true,
    imports: [
        BackHomeUiComponent,
        FormsModule,
        MatError,
        MatFabButton,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './form-ui.component.html',
  styleUrl: './form-ui.component.scss'
})
export class FormUiComponent {
  public title = input.required<string>();
}
