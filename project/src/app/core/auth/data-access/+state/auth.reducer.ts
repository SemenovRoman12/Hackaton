import {LoadingStatus} from "@core/data-access/loading-status.type";
import {createFeature, createReducer, on} from "@ngrx/store";
import {AuthActions} from "@core/auth/data-access/+state/auth.actions";

export const AUTH_FEATURE_NAME = "auth";

export interface AuthState {
  authStatus: LoadingStatus;
  error: Error | null;
  authToken: string;
}

export const authInitialState: AuthState = {
  authStatus: 'init',
  error: null,
  authToken: '',
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
  ),
})
