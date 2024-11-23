import {Component, inject} from '@angular/core';
import {MatDialogClose, MatDialogModule, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatError,  MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-support-add-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatDialogTitle,
    MatButton,
    MatDialogClose,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatError
  ],
  templateUrl: './support-add-dialog.component.html',
  styleUrl: './support-add-dialog.component.scss'
})
export class SupportAddDialogComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialogRef = inject(MatDialogRef);
  public readonly addSupportForm = this.fb.group({
    title: [null, [Validators.required]],
    description: [null, [Validators.required]],
  });

  public onAddSupport() {
    this.dialogRef.close(this.addSupportForm.value);
  }
}
