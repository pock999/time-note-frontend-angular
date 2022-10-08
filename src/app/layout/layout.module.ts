import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLayoutComponent } from './containers/base-layout/base-layout.component';
import { NavComponent } from './components/nav/nav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from './containers/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    BaseLayoutComponent,
    NavComponent,
    SidenavComponent,
    FooterComponent,
    HeaderComponent,
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
  ],
  exports: [
    BaseLayoutComponent,
    NavComponent,
  ],
})
export class LayoutModule { }
