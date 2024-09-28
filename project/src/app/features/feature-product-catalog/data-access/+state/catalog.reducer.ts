import {ProductEntity} from "@features/feature-product-catalog/data-access/models/product.model";
import {createEntityAdapter, EntityAdapter, EntityState} from "@ngrx/entity";
import {LoadingStatus} from "@core/data-access/loading-status.type";
import {createFeature, createReducer, on} from "@ngrx/store";
import {CatalogActions} from "@features/feature-product-catalog/data-access/+state/catalog.actions";

export const CATALOG_FEATURE_KEY = 'catalog';

export interface CatalogState extends EntityState<ProductEntity> {
  loading: LoadingStatus;
  error: Error | null;
}

export const catalogAdapter: EntityAdapter<ProductEntity> = createEntityAdapter<ProductEntity>();

const catalogInitialState: CatalogState = catalogAdapter.getInitialState({
  loading: 'init',
  error: null,
});

export const catalogFeature = createFeature({
  name: CATALOG_FEATURE_KEY,
  reducer: createReducer(
    catalogInitialState,
    on(CatalogActions.loadProducts, (state) => ({
      ...state,
      loading: 'loading' as const,
    })),
    on(CatalogActions.loadProductsSuccess, (state, {products}) =>
      catalogAdapter.setAll(products, {...state, loading: 'loaded' as const})
    ),
    on(CatalogActions.loadProductsFailure, (state, {error}) => ({
      ...state,
      loading: 'error' as const,
      error,
    })),
  ),
  extraSelectors: ({selectCatalogState}) => ({
    ...catalogAdapter.getSelectors(selectCatalogState),
  })
});
