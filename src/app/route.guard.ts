import { CanActivateFn } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map } from 'rxjs/operators';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {
  const auth = inject(AngularFireAuth);
  const router = inject(Router);

  return auth.authState.pipe(
    map(user => {
      if (user) {
        console.log("user is " + user.email);
        return true;
      } else {
        router.navigateByUrl('/sign-in');
        return false;
      }
    })
  );
};
