import { Component } from '@angular/core';
import {SupportsListComponent} from "@features/feature-supports/supports-list/supports-list.component";

@Component({
  selector: 'app-supports-list-container',
  standalone: true,
  imports: [
    SupportsListComponent
  ],
  templateUrl: './supports-list-container.component.html',
  styleUrl: './supports-list-container.component.scss'
})
export class SupportsListContainerComponent {

}
