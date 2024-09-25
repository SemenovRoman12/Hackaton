import { Routes } from '@angular/router';
import {
  ProductCatalogContainerComponent
} from "./features/feature-product-catalog/product-catalog-container/product-catalog-container.component";

export const routes: Routes = [
  {
    path: '',
    component: ProductCatalogContainerComponent,
  }
];
