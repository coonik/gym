import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CollapseModule } from 'ngx-bootstrap/collapse';

const modules = [
  
  ];
  const components = [
      HeaderComponent,
      FooterComponent
  ];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules,
    FlexLayoutModule,
    CollapseModule
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [],
})
export class SharedModule { }
