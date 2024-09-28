import {ChangeDetectionStrategy, Component, inject, input, Input, OnInit} from '@angular/core';
import {ProductEntity} from "@features/feature-product-catalog/data-access/models/product.model";
import {ProductCardComponent} from "@features/feature-product-catalog/product-card/product-card.component";
import {CatalogFacadeService} from "@features/feature-product-catalog/data-access/services/catalog.facade.service";

@Component({
  selector: 'product-catalog',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogComponent {
  private readonly catalogFacade = inject(CatalogFacadeService);
  public productList = input.required<ProductEntity[]>();

}
