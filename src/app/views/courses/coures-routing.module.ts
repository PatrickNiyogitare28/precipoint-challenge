import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CasesComponent } from "./cases/cases.component";
import { HomeComponent } from "./home/home.component";
import { SlideComponent } from "./slide/slide.component";
import { SlidesComponent } from "./slides/slides.component";
import { StudentInfoComponent } from "./student-info/student-info.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'courses/:id',
        component: CasesComponent
    },
    {
        path: 'courses/:courseId/:caseId',
        component: SlidesComponent
    },
    {
        path: 'courses/:courseId/:caseId/:slideId',
        component: SlideComponent
    },
    {
        path: 'students/:studentId',
        component: StudentInfoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoursesRoutingModule {};