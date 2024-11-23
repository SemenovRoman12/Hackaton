import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";
import {MatButton} from "@angular/material/button";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {SupportAddButtonComponent} from "@features/feature-servers-catalog/my-servers/support-add-button/support-add-button.component";
import {filter, Observable, switchMap, tap} from "rxjs";
import {MyServersService} from "@features/feature-servers-catalog/my-servers/data-access/my-servers.service";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {Server} from "@features/feature-servers-catalog/models/server.model";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-server-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatCard,
    MatCardHeader,
    MatDivider,
    MatCardContent,
    MatButton,
    RouterLink,
    SupportAddButtonComponent,
  ],
  templateUrl: './server-detail.component.html',
  styleUrl: './server-detail.component.scss'
})
export class ServerDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly myServerService = inject(MyServersService);

  private server$: Observable<Server> = this.route.params.pipe(
    switchMap(({ id }) => this.myServerService.getServer(id))
  );

  public server = toSignal<Server>(this.server$)

  public onUnRentServer(): void {
    this.myServerService.unRentServer(this.server()!);
    this.router.navigate([`my-servers`]);
  }

}
