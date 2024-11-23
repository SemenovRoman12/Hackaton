import {Component, DestroyRef, inject} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {SupportCardComponent} from "@features/feature-supports/support-card/support-card.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {
  SupportAddDialogComponent
} from "@features/feature-servers-catalog/my-servers/support-add-dialog/support-add-dialog.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {SupportContentComponent} from "@features/feature-supports/support-content/support-content.component";

@Component({
  selector: 'app-supports-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    SupportCardComponent
  ],
  templateUrl: './supports-list.component.html',
  styleUrl: './supports-list.component.scss'
})
export class SupportsListComponent {
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);


  public viewSupport() {
    const dialogRef = this.dialog.open(SupportContentComponent, {
      width: "500px"
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
  }
}
