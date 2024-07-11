import { inject, Inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  if (isPlatformBrowser(inject(PLATFORM_ID))) {
    const token = sessionStorage.getItem('token');

    if (token) {
      console.log('已登入');
      return true;
    }
  }

  console.log('未登入，跳轉回登入頁面');
  router.navigate(['/login']);
  return false;
};
