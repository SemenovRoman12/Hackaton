import {Component, inject, Input, input, OnInit} from '@angular/core';
import {AvailableServerCardComponent} from "@features/feature-servers-catalog/available-servers/available-server-card/available-server-card.component";
import {Server} from "@features/feature-servers-catalog/models/server.model";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {
  AvailabelServerService
} from "@features/feature-servers-catalog/available-servers/data-access/availabel-servers.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-available-servers',
  standalone: true,
  imports: [
    AvailableServerCardComponent,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './available-servers.component.html',
  styleUrl: './available-servers.component.scss'
})
export class AvailableServersComponent implements OnInit{

  private readonly availableServersService = inject(AvailabelServerService);
  public readonly servers = toSignal(this.availableServersService.availableServers$);

  ngOnInit() {
    this.availableServersService.loadServers();
  }
}
