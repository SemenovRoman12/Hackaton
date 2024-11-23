import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {AvailableServerCardComponent} from "@features/feature-servers-catalog/available-servers/available-server-card/available-server-card.component";
import {AsyncPipe, NgForOf} from "@angular/common";
import {
  AvailableServerService
} from "@features/feature-servers-catalog/available-servers/data-access/availabel-servers.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {Server} from "@features/feature-servers-catalog/models/server.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-available-servers',
  standalone: true,
  imports: [
    AvailableServerCardComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './available-servers.component.html',
  styleUrl: './available-servers.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvailableServersComponent implements OnInit{

  private readonly availableServersService = inject(AvailableServerService);
  public readonly servers = toSignal(this.availableServersService.availableServers$);
  private readonly router = inject(Router);

  public onRentServer(server: Server): void {
    this.availableServersService.rentServer(server);
    this.router.navigate([`my-servers/${server.ID}`]);
    console.log(server);
  }

  ngOnInit() {
    this.availableServersService.loadServers();
  }
}
