import { RouterModule } from '@angular/router';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CommonModule } from '@angular/common';
import FooterComponent from '../footer/footer.component';
import HeaderComponent from './header.component';

const modules = [FlexLayoutModule, CollapseModule, RouterModule];
const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules, PopoverModule.forRoot(), CommonModule],
  exports: [...components, ...modules],
  providers: [],
})
export default class SharedModule {}
