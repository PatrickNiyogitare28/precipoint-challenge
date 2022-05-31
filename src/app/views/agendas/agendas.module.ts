import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAgendasComponent } from './list-agendas/list-agendas.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ActivitiesComponent } from './activities/activities.component';
import { AgendasRoutingModule } from './agenda-routing.module';
import { ActivityComponent } from './activity/activity.component';



@NgModule({
  declarations: [
    HomeComponent,
    ActivitiesComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AgendasRoutingModule
  ]
})
export class AgendasModule { }
