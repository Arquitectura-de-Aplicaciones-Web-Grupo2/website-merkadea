// import { PedidosComponent } from './pedidos/pedidos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LandingComponent } from './components/landing/landing.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register'])),
  },
  {
    path: 'category/:id',
    component: CategoryComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register'])),
  },
  {
    path: 'extraviada',
    component: NotFoundComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register'])),
  },
  {
    path: 'carrito',
    component: MyCartComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register'])),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register'])),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register'])),
  },
  {
    path: 'shop',
    component: ShopComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/register'])),

  },
  {
    path: 'landingpage',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
