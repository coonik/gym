import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HomePageComponent from './components/home-page/home-page.component';
import ProductDetailPageComponent from './components/product-detail-page/product-detail-page.component';
import ProductsPageComponent from './components/products-page/products-page.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: 'detail', component: ProductDetailPageComponent },
  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
