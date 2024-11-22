import { Component } from '@angular/core';
import {ServerCardComponent} from "@features/feature-servers-catalog/shared/server-card/server-card.component";

@Component({
  selector: 'app-my-servers',
  standalone: true,
  imports: [
    ServerCardComponent
  ],
  templateUrl: './my-servers.component.html',
  styleUrl: './my-servers.component.scss'
})
export class MyServersComponent {

}
