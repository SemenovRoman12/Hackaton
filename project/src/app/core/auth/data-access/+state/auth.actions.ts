import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {NewUser, SignAuthUser} from "../models/sign.auth.model";

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Register': props<{userData: NewUser}>(),
    'Register Success': props<{authToken: string}>(),
    'Register Failure': props<{error: Error}>(),

    'Login': props<{userData: SignAuthUser}>(),
    'Login Success': props<{authToken: string}>(),
    'Login Failure': props<{error: Error}>(),

    'Get User': emptyProps(),
    'Get User Success': emptyProps(),
    'Get User Failure': props<{error: Error}>(),

    'Logout': emptyProps(),
  }
});

