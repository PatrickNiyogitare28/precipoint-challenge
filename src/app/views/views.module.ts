import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { CoursesRoutingModule } from './courses/coures-routing.module';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [
  
    CounterComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ComponentsModule
  ]
})
export class ViewsModule { }
