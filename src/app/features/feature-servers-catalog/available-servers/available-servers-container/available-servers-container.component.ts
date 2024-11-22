import { Component } from '@angular/core';
import {
  AvailableServersComponent
} from "@features/feature-servers-catalog/available-servers/available-servers/available-servers.component";

@Component({
  selector: 'app-available-servers-container',
  standalone: true,
  imports: [
    AvailableServersComponent
  ],
  templateUrl: './available-servers-container.component.html',
  styleUrl: './available-servers-container.component.scss'
})
export class AvailableServersContainerComponent {

}
