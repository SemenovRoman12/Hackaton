import {LoadingStatus} from "@core/data-access/loading-status.type";
import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthActions} from "@core/auth/data-access/+state/auth.actions";
import {AuthUser} from "@core/auth/data-access/models/sign.auth.model";

export const AUTH_FEATURE_NAME = "auth";

export interface AuthState {
  authStatus: LoadingStatus;
  error: Error | null;
  userData: AuthUser | null;
}

export const authInitialState: AuthState = {
  authStatus: 'init',
  error: null,
  userData: null
};

export const authFeature = createFeature({
  name: AUTH_FEATURE_NAME,
  reducer: createReducer(
    authInitialState,
    on(AuthActions.register, (state) => ({
      ...state,
      authStatus: 'loading' as const,
    })),
    on(AuthActions.registerSuccess, (state, {authToken}) => ({
      ...state,
      authStatus: 'loaded' as const,
      authToken,
    })),
    on(AuthActions.registerFailure, (state, {error}) => ({
      ...state,
      authStatus: 'error' as const,
      error,
    })),
    on(AuthActions.login, (state) => ({
      ...state,
      authStatus: 'loading' as const
    })),
    on(AuthActions.loginSuccess, (state, {userData}) => ({
      ...state,
      authStatus: 'loaded' as const,
      userData,
    })),
    on(AuthActions.loginFailure, (state, {error}) => ({
      ...state,
      authStatus: 'error' as const,
      error,
    })),
    on(AuthActions.getUser, (state) => ({
      ...state
    })),
    on(AuthActions.getUserSuccess, (state) => ({
      ...state,
      authStatus: 'loaded' as const,
    })),
    on(AuthActions.getUserFailure, (state, {error}) => ({
      ...state,
      authStatus: 'error' as const,
      error,
    })),
    on(AuthActions.logout, (state) => ({
      ...state,
      ...authInitialState,
    })),
  ),
})
