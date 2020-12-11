import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import FooterComponent from '../footer/footer.component';
import HeaderComponent from './header.component';

const modules = [FlexLayoutModule, CollapseModule];
const components = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
  providers: [],
})
export default class SharedModule {}
