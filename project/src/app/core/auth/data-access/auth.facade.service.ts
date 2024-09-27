import {inject, Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthActions} from "@core/auth/data-access/+state/auth.actions";
import {NewUser, SignAuthUser} from "@core/auth/data-access/+state/sign.auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  private readonly store = inject(Store);

  public register(userData: NewUser) {
    this.store.dispatch(AuthActions.register({userData}));
  }

  public login(userData: SignAuthUser) {
    this.store.dispatch(AuthActions.login({userData}))
  }
}
