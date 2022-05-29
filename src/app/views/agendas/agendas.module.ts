import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendasComponent } from './agendas.component';
import { ListAgendasComponent } from './list-agendas/list-agendas.component';
import { ViewAngendaComponent } from './view-angenda/view-angenda.component';



@NgModule({
  declarations: [
    AgendasComponent,
    ListAgendasComponent,
    ViewAngendaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AgendasModule { }
