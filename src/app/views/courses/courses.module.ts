import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
import { CasesComponent } from './cases/cases.component';
import { SlidesComponent } from './slides/slides.component';
import { SlideComponent } from './slide/slide.component';
import { StudentInfoComponent } from './student-info/student-info.component';



@NgModule({
  declarations: [
    HomeComponent,
    StudentsComponent,
    CoursesComponent,
    CasesComponent,
    SlidesComponent,
    SlideComponent,
    StudentInfoComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class CoursesModule { }
