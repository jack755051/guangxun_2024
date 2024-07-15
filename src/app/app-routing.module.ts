import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { authGuard } from './core/guards/auth.guard';
import { LatestNewsComponent } from './pages/latest-news/latest-news.component';
import { AboutGuangxunComponent } from './pages/about-guangxun/about-guangxun.component';
import { TechnicalSupportComponent } from './pages/technical-support/technical-support.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ProductCenterComponent } from './pages/product-center/product-center.component';
import { ManageComponent } from './pages/manage/manage.component';
import { PageName } from './share/types/common.enum';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'latest-news',
        component: LatestNewsComponent,
        data: { breadcrumb: PageName['latest-news'], isClicked: true },
      },
      {
        path: 'about-guangxun',
        component: AboutGuangxunComponent,
        data: { breadcrumb: PageName['about-guangxun'], isClicked: true },
      },
      {
        path: 'technical-support',
        component: TechnicalSupportComponent,
        data: { breadcrumb: PageName['technical-support'], isClicked: true },
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: { breadcrumb: PageName['faq'], isClicked: true },
      },
      {
        path: 'product-center',
        component: ProductCenterComponent,
        data: { breadcrumb: PageName['product-center'], isClicked: true },
      },
      {
        path: 'manage',
        component: ManageComponent,
        data: { breadcrumb: PageName['manage'], isClicked: true },
      },
    ],
  },
  { path: 'error-page', component: ErrorComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '/error-page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
