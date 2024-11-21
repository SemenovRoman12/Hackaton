import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {ApiService} from "@core/http/api.service";
import {CatalogActions} from "@features/feature-product-catalog/data-access/+state/catalog.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {ProductDTO} from "@features/feature-product-catalog/data-access/models/product.model";

export const loadCatalogEffect$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    return actions$.pipe(
      ofType(CatalogActions.loadProducts),
      switchMap(() => {
        return apiService.get<ProductDTO>('/products').pipe(
          map((products) => products.data),
          map((products) => CatalogActions.loadProductsSuccess({products})),
          catchError((error) => of(CatalogActions.loadProductsFailure({error})))
        );
      })
    );
  }, {functional: true}
);
