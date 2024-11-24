import {Component, Inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MAT_DIALOG_DATA, MatDialogClose, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-server-info',
  standalone: true,
  imports: [
    MatButton,
    MatDialogClose,
    MatDialogTitle,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatDivider
  ],
  templateUrl: './server-info.component.html',
  styleUrl: './server-info.component.scss'
})
export class ServerInfoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { IP: string; Login: string; Password: string },
    public dialogRef: MatDialogRef<ServerInfoComponent>
  ) {}
}


