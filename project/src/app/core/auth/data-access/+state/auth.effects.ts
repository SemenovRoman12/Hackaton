import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject} from "@angular/core";
import {ApiService} from "@core/http/api.service";
import {LocalStorageTokenService} from "@core/auth/data-access/services/local-storage-token.service";
import {AuthActions} from "@core/auth/data-access/+state/auth.actions";
import {catchError, concatMap, EMPTY, map, of, switchMap, tap, withLatestFrom} from "rxjs";
import {NewUser, RegisterResponse, SignAuthResponse, SignAuthUser} from "@core/auth/data-access/models/sign.auth.model";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {selectAuthStatus} from "@core/auth/data-access/+state/auth.selectors";

export const registerEffect$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const apiService = inject(ApiService);
    return actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({userData}) => {
          return apiService.post<RegisterResponse, NewUser>('/signup', userData).pipe(
            map((response) => response.data.user_token),
            map((authToken) => AuthActions.registerSuccess({authToken})),
            catchError((error) => of(AuthActions.registerFailure({error})))
          );
        }
      )
    );
  }, {functional: true}
);

export const registerEffectSuccess$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const localStorageTokenService = inject(LocalStorageTokenService);
    const router = inject(Router);
    return actions$.pipe(
      ofType(AuthActions.registerSuccess),
      concatMap((action) => {
        localStorageTokenService.setItem(action.authToken);
        router.navigate(['']);
        return of();
      })
    );
  }, {functional: true, dispatch: false}
);

export const loginEffect$ = createEffect(
  () => {
    const apiService = inject(ApiService);
    const actions$ = inject(Actions);
    return actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({userData}) => {
        return apiService.post<SignAuthResponse, SignAuthUser>('/login', userData).pipe(
          map((userData) => userData.data.user_token),
          map((authToken) => AuthActions.loginSuccess({authToken})),
          catchError((error) => of(AuthActions.loginFailure({error})))
        );
      })
    );
  }, {functional: true}
);

export const loginSuccessEffect$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const router = inject(Router);
    const localStorageTokenService = inject(LocalStorageTokenService);
    return actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap((action) => {
        localStorageTokenService.setItem(action.authToken);
        router.navigate(['/catalog']);
      })
    );
  }, {functional: true, dispatch: false}
);

export const getUserEffect$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const localStorageTokenService = inject(LocalStorageTokenService);
    const store = inject(Store);

    return actions$.pipe(
      ofType(AuthActions.getUser),
      withLatestFrom(store.select(selectAuthStatus)),
      switchMap(([, authStatus]) => {
        console.log(localStorageTokenService.getItem(), authStatus)
        if(localStorageTokenService.getItem()) {
          console.log('true')
          return of(AuthActions.getUserSuccess()).pipe(catchError((error) => of(AuthActions.getUserFailure({error}))))
        } else {
            console.log('false')
            return of();
        }
      })
    );
  }, {functional: true}
);

export const logoutEffect$ = createEffect(
  () => {
    const actions$ = inject(Actions);
    const router = inject(Router);
    const localStorageTokenService = inject(LocalStorageTokenService);
    return actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        localStorageTokenService.removeItem();
        router.navigate(['/guest/home']);
      }),
    );
  }, {functional: true, dispatch: false}
);
