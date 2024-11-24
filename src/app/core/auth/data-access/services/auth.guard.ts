import {inject} from "@angular/core";
import {Router} from "@angular/router";
import {ApiService} from "@core/http/api.service";
import {catchError, of} from "rxjs";

export const authGuard = () => {
  const router = inject(Router);
  const apiService = inject(ApiService);




  return apiService.get<any>('/servers/my').pipe(
    catchError((error) => {
      if (error.status === 403) {
        console.log(error.status)
        router.navigate(['/guest/home']);
        return of(false);
      }
      router.navigate(['/guest/home']);
      return of(true);
    })
  );
};
