import {Component, DestroyRef, inject, input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
  SupportAddDialogComponent
} from "@features/feature-servers-catalog/my-servers/support-add-dialog/support-add-dialog.component";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
  RentDialogComponent
} from "@features/feature-servers-catalog/available-servers/rent-dialog/rent-dialog.component";
import {MatButton} from "@angular/material/button";
import {tap} from "rxjs";
import {
  AvailableServerService
} from "@features/feature-servers-catalog/available-servers/data-access/availabel-servers.service";
import {Router} from "@angular/router";
import {
  ServerInfoComponent
} from "@features/feature-servers-catalog/available-servers/server-info/server-info.component";

@Component({
  selector: 'app-rent-button',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './rent-button.component.html',
  styleUrl: './rent-button.component.scss'
})
export class RentButtonComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly dialog = inject(MatDialog);
  private readonly availableServersService = inject(AvailableServerService)
  private readonly router = inject(Router);

  public server = input<any>()

  public openRentDialog() {
    const dialogRef = this.dialog.open(RentDialogComponent, {
      width: "400px",
    });


    dialogRef
      .afterClosed()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((days) => {
        this.availableServersService.rentServer(this.server(), days.days).subscribe(
          (res: {IP: string, Login: string, Password: string}) => {
            this.dialog.open(ServerInfoComponent, {
              width: "400px",
              data: res
            })
            console.log(res)
          }
        )
        this.router.navigate([`my-servers/${this.server().ID}`])
      })
  }
}