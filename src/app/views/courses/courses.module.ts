import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { StudentsComponent } from './students/students.component';



@NgModule({
  declarations: [
    HomeComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class CoursesModule { }
