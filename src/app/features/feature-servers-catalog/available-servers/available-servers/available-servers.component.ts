import { Component } from '@angular/core';
import {ServerCardComponent} from "@features/feature-servers-catalog/shared/server-card/server-card.component";

@Component({
  selector: 'app-available-servers',
  standalone: true,
    imports: [
        ServerCardComponent
    ],
  templateUrl: './available-servers.component.html',
  styleUrl: './available-servers.component.scss'
})
export class AvailableServersComponent {

}
