import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from 'src/app/services/agendas/agenda.service';
import { AgendaMonth } from 'src/app/types/agenda-month';
import { BreadCrumbHandler } from 'src/app/utils/bread-crumb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public agendaMonths: Array<AgendaMonth> = []
  constructor(private agendaService: AgendaService, private route: Router, private breadCrumbHandler: BreadCrumbHandler) { }

  getAgendaMonths = () => {
    const res = this.agendaService.getMothns();
    res.subscribe((data) => {
      this.agendaMonths = data as Array<AgendaMonth>
    })
  }

  onRouteToAgenda = (month: string) => {
    this.route.navigate(['/agendas', month])
  }

  setBreadCrumb = () => {
    this.breadCrumbHandler.setBreadCrumb('Agendas')
  }

  ngOnInit(): void {
    this.getAgendaMonths();
    this.setBreadCrumb();
  }

}
