import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { CoursesRoutingModule } from './courses/coures-routing.module';
import { AgendasRoutingModule } from './agendas/agenda-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AgendasRoutingModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
