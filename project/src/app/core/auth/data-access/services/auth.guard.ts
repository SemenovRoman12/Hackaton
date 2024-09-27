import {inject} from "@angular/core";
import {LocalStorageTokenService} from "@core/auth/data-access/services/local-storage-token.service";
import {Router} from "@angular/router";

export const authGuard = () => {
  const localStorageTokenService = inject(LocalStorageTokenService);
  const router = inject(Router);

  if(!localStorageTokenService.getItem()) {
    router.navigate(['/guest/home']);
    return false;
  }
  return true;
};
