import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);
  const token = localStorage.getItem('jwt');
  var isTokenValid: boolean;

  try {
    if(token) {
      const payload = JSON.parse(token);
      const expiry: number = payload?.exp;
      isTokenValid = expiry > Date.now();
      if(!isTokenValid){
        localStorage.removeItem(token);
        router.navigate(['/login']);
        return false;
      }
      return true;
    }
    return false;
  } 
  catch {
    return false;
  }
};


