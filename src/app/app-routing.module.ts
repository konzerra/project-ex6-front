import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./auth_guard/auth.guard";
import {ForbiddenComponent} from "./ui/app/forbidden/forbidden.component";
import {DashboardComponent} from "./ui/main/dashboard/dashboard.component";
import {authorities} from "./ui/auth/Authorities";

const routes: Routes = [


  {
    path: 'products',
    loadChildren: () => import('./ui/product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./ui/checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./ui/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./ui/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'dashboard', component: DashboardComponent,
    canActivate:[AuthGuard], data:{authority: authorities.portal.main},
  },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'public',
    loadChildren: () => import('./ui/public/public.module').then(m => m.PublicModule)
  },
  { path: '**', redirectTo: 'products', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
