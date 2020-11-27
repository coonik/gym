import { HeaderComponent } from './header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

const modules = [
  ];
  const components = [
      HeaderComponent
  ];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
    FlexLayoutModule
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [],
})
export class SharedModule { }
