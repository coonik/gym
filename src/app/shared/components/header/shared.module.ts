import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CollapseModule } from 'ngx-bootstrap/collapse';

const modules = [  
    FlexLayoutModule,
    CollapseModule
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
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [],
})
export class SharedModule { }
