import { Inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);
  const token = localStorage.getItem('jwt');
  var isTokenValid: boolean = true; // TODO : check token expiry

  try {
    const router = Inject(Router);
    const platformId = Inject(PLATFORM_ID);

    // ✅ only access localStorage in browser
    if (isPlatformBrowser(platformId)) {
      const token = localStorage.getItem('token');

      if (token) {
        return true;
      }
      return router.navigate(['/login']);
    }
  } 
  catch {
    return false;
  }
};


