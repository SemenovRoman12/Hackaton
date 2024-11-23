import {Component, DestroyRef, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {SupportAddDialogComponent} from "@features/feature-servers-catalog/my-servers/support-add-dialog/support-add-dialog.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";


@Component({
  selector: 'app-support-add-button',
  standalone: true,
    imports: [
        MatButton
    ],
  templateUrl: './support-add-button.component.html',
  styleUrl: './support-add-button.component.scss'
})
export class SupportAddButtonComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);

  public openAddSupportDialog() {
    const dialogRef = this.dialog.open(SupportAddDialogComponent, {
      width: "400px"
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((result) => {
        if (result) {
          console.log('bam');
        }
      })
  }
}
