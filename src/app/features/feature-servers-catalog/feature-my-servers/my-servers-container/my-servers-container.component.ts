import { Component } from '@angular/core';
import {MyServersComponent} from "@features/feature-servers-catalog/feature-my-servers/my-servers/my-servers.component";

@Component({
  selector: 'app-my-servers-container',
  standalone: true,
  imports: [
    MyServersComponent
  ],
  templateUrl: './my-servers-container.component.html',
  styleUrl: './my-servers-container.component.scss'
})
export class MyServersContainerComponent {

}
