import {Component, inject, input, OnInit} from '@angular/core';
import {AvailableServerCardComponent} from "@features/feature-servers-catalog/available-servers/available-server-card/available-server-card.component";
import {SupportCardComponent} from "@features/feature-supports/support-card/support-card.component";
import {Server} from "@features/feature-servers-catalog/models/server.model";
import {
  MyServerCardComponent
} from "@features/feature-servers-catalog/my-servers/my-server-card/my-server-card.component";
import {MyServersService} from "@features/feature-servers-catalog/my-servers/data-access/my-servers.service";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-my-servers',
  standalone: true,
  imports: [
    AvailableServerCardComponent,
    SupportCardComponent,
    MyServerCardComponent
  ],
  templateUrl: './my-servers.component.html',
  styleUrl: './my-servers.component.scss'
})
export class MyServersComponent implements OnInit {
  private readonly myServersService = inject(MyServersService);
  public readonly servers = toSignal<Server[]>(this.myServersService.myServers$);

  ngOnInit() {
    this.myServersService.loadServers();
    setTimeout(() => console.log(this.servers()), 1000)
  }
}
