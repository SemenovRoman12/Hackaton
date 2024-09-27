import {createActionGroup, props} from "@ngrx/store";
import {NewUser, SignAuthResponse, SignAuthUser} from "./sign.auth.model";

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register': props<{userData: NewUser}>(),
    'Register Success': props<{authToken: string}>(),
    'Register Failure': props<{error: Error}>(),

    'Login': props<{userData: SignAuthUser}>(),
    'Login Success': props<{authToken: string}>(),
    'Login Failure': props<{error: Error}>(),
  }
});

