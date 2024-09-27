import {authFeature} from "@core/auth/data-access/+state/auth.reducer";

export const { selectAuthStatus, selectAuthToken, selectError } = authFeature;
