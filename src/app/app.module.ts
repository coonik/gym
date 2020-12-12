import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { routes } from './app-routing.module';
import HomePageComponent from './components/home-page/home-page.component';
import SharedModule from './shared/components/header/shared.module';
import AppComponent from './app.component';
import ProductsPageComponent from './components/products-page/products-page.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ProductsPageComponent],
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    CarouselModule,
    PaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
