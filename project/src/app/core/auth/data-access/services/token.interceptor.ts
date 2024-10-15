import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {LocalStorageTokenService} from "@core/auth/data-access/services/local-storage-token.service";
import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {catchError, of, throwError} from "rxjs";

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageTokenService = inject(LocalStorageTokenService);
  const token = localStorageTokenService.getItem();
  const router = inject(Router);

  if(token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      },
    });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if(error.status === 401) {
        router.navigate(['/login']);
        localStorageTokenService.removeItem();
      }
      return throwError(() => error);
    }),
  );
};
// aaa
// sdfs
