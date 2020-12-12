import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import HomePageComponent from './components/home-page/home-page.component';
import ProductsPageComponent from './components/products-page/products-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
