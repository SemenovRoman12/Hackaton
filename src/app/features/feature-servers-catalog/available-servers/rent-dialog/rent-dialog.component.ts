import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialogClose, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-rent-dialog',
  standalone: true,
    imports: [
        MatButton,
        MatDialogClose,
        MatDialogTitle,
        MatError,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './rent-dialog.component.html',
  styleUrl: './rent-dialog.component.scss'
})
export class RentDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef);
  public readonly rentForm = this.fb.group({
    days: [null, [Validators.required]],
  });

  public onRent() {
    this.dialogRef.close(this.rentForm.value);
  }
}
