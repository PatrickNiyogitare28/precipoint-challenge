import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesComponent } from "./activities/activities.component";
import { ActivityComponent } from "./activity/activity.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'agendas/:month',
        component: ActivitiesComponent
    },
    {
        path: 'agendas/:month/:agendaId',
        component: ActivityComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AgendasRoutingModule {};