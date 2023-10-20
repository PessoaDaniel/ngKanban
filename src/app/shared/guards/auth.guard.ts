import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = new Router();
  return true;
  if (!localStorage.getItem('token')) {
      router.navigate(['auth']);  
      return false;
  }
  return true;
};
