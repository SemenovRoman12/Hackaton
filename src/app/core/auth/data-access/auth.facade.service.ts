import {inject, Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {AuthActions} from "@core/auth/data-access/+state/auth.actions";
import {NewUser, SignAuthUser} from "@core/auth/data-access/models/sign.auth.model";
import {selectIsAuthenticated} from "@core/auth/data-access/+state/auth.selectors";

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {
  private readonly store = inject(Store);
  public readonly isAuthenticated = this.store.selectSignal(selectIsAuthenticated);

  // public register(userData: NewUser) {
  //   this.store.dispatch(AuthActions.register({userData}));
  // }

  public login(userData: SignAuthUser) {
    this.store.dispatch(AuthActions.login({userData}))
  }

  public logout() {
    this.store.dispatch(AuthActions.logout());
  }
}
