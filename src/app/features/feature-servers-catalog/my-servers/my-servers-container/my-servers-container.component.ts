import {Component, inject, OnInit} from '@angular/core';
import {MyServersComponent} from "@features/feature-servers-catalog/my-servers/my-servers/my-servers.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {Server} from "@features/feature-servers-catalog/models/server.model";
import {MyServersService} from "@features/feature-servers-catalog/my-servers/data-access/my-servers.service";

@Component({
  selector: 'app-my-servers-container',
  standalone: true,
  imports: [
    MyServersComponent
  ],
  templateUrl: './my-servers-container.component.html',
  styleUrl: './my-servers-container.component.scss'
})
export class MyServersContainerComponent implements OnInit {
  private readonly myServersService = inject(MyServersService);
  public readonly servers = toSignal<Server[]>(this.myServersService.myServers$);

  ngOnInit() {
    this.myServersService.loadServers();
  }
}
