import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {ProductEntity} from "@features/feature-product-catalog/data-access/models/product.model";

export const CatalogActions = createActionGroup({
  source: 'Catalog',
  events: {
    'Load Products': emptyProps(),
    'Load Products Success': props<{products: ProductEntity[]}>(),
    'Load Products Failure': props<{error: Error}>(),
  }
});
