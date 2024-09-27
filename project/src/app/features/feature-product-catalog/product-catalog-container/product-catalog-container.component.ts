import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ApiService} from "@core/http/api.service";
import {BackHomeComponent} from "../../../shared/back-home/back-home.component";

@Component({
  selector: 'product-catalog-container',
  standalone: true,
  imports: [
    BackHomeComponent
  ],
  templateUrl: './product-catalog-container.component.html',
  styleUrl: './product-catalog-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogContainerComponent {

}
