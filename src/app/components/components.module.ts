import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigateBackComponent } from './navigate-back/navigate-back.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    NavigateBackComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    NavbarComponent,
    NavigateBackComponent
  ]
})
export class ComponentsModule { }
