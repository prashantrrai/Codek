import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injector } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  
  const injector = Injector.create({
    providers: [
      { provide: AuthService, useClass: AuthService },
    ],
  });

  const authService = injector.get(AuthService);

  const isAuthenticated = authService.setAuthenticated(true)
  console.log(isAuthenticated)
  
  if (isAuthenticated) {
    return true;
  } else {
    const router = injector.get(Router);
    router.navigate(['/login']);
    return false;
  }
};
