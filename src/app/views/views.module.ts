import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { CoursesRoutingModule } from './courses/coures-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
