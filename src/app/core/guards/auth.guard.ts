import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  if (token) {
    console.log('已登入');
    return true;
  }
  console.log('未登入，跳轉回登入頁面');
  router.navigate(['/login']);
  return false;
};
