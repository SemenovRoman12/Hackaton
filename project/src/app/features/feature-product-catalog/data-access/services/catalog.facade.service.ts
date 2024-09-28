import {inject, Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {CatalogActions} from "@features/feature-product-catalog/data-access/+state/catalog.actions";
import {catalogFeature} from "@features/feature-product-catalog/data-access/+state/catalog.reducer";

@Injectable({
  providedIn: 'root'
})
export class CatalogFacadeService {
  private readonly store = inject(Store);

  public readonly productsList = this.store.selectSignal(catalogFeature.selectAll);
  public readonly loadingStatus = this.store.selectSignal(catalogFeature.selectLoading);
  public readonly errorStatus = this.store.selectSignal(catalogFeature.selectError);

  public loadProducts() {
    this.store.dispatch(CatalogActions.loadProducts());
  }
}
