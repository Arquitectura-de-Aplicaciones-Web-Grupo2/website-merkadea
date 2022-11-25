// import { PedidosComponent } from './pedidos/pedidos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './website/components/layout/layout.component';
import { HomeComponent } from './website/pages/home/home.component';
import { NotFoundComponent } from './website/pages/not-found/not-found.component';
import { CategoryComponent } from './website/pages/category/category.component';
import { MyCartComponent } from './website/pages/my-cart/my-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoveryComponent } from './website/pages/recovery/recovery.component';
import { ProfileComponent } from './website/pages/profile/profile.component';
import { ShopComponent } from './website/pages/shop/shop.component';
import { LandingComponent } from './landing/landing.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ProductDetailComponent } from './website/pages/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
        path: 'product/:id',
        component: ProductDetailComponent,
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
    ],
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
    path: 'landingpage',
    component: LandingComponent,
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then((m) => m.CmsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
