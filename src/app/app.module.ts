import { HomePageComponent } from './components/home-page/home-page.component';
import { routes } from './app-routing.module';
import { SharedModule } from './shared/components/header/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,  
    RouterModule.forRoot(routes), 
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
