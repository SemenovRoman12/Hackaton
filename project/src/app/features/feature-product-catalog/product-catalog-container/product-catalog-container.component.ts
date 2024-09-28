import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {BackHomeUiComponent} from "@shared/back-home-ui/back-home-ui.component";
import {CatalogFacadeService} from "@features/feature-product-catalog/data-access/services/catalog.facade.service";
import {MatProgressBar} from "@angular/material/progress-bar";
import {ProductCatalogComponent} from "@features/feature-product-catalog/product-catalog/product-catalog.component";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'product-catalog-container',
  standalone: true,
  imports: [
    BackHomeUiComponent,
    MatProgressBar,
    ProductCatalogComponent,
    JsonPipe
  ],
  templateUrl: './product-catalog-container.component.html',
  styleUrl: './product-catalog-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogContainerComponent implements OnInit {
  private readonly catalogFacade = inject(CatalogFacadeService);
  public readonly productsList = this.catalogFacade.productsList;
  public readonly loadingStatus = this.catalogFacade.loadingStatus;
  public readonly errorStatus = this.catalogFacade.errorStatus;

  ngOnInit() {
    this.catalogFacade.loadProducts();
  }
}
