import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  var router = Inject(Router);
  const token = typeof window !== 'undefined' ?
      localStorage.getItem('jwt') : null;
  
  console.log(token);
  if(token) {
    return router.createUrlTree(['/home']); // redirect to home if token is present for logged in user. If user tries to press back button when logged in
  }
  return true;
};
