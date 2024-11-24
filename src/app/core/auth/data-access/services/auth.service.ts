import {inject, Injectable} from '@angular/core';
import {SignAuthUser} from "@core/auth/data-access/models/sign.auth.model";
import {ApiService} from "@core/http/api.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiService = inject(ApiService)
  private readonly router = inject(Router);

  public loginService(userData: SignAuthUser) {
    this.apiService.post<any, SignAuthUser>('/auth/signin', userData).pipe(
      tap(() => this.router.navigate(['/home'])),
    ).subscribe(v => console.log(v))
  }
}
