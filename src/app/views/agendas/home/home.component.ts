import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendaService } from 'src/app/services/agendas/agenda.service';
import { AgendaMonth } from 'src/app/types/agenda-month';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public agendaMonths: Array<AgendaMonth> = []
  constructor(private agendaService: AgendaService, private route: Router) { }

  getAgendaMonths = () => {
    const res = this.agendaService.getMothns();
    res.subscribe((data) => {
      this.agendaMonths = data as Array<AgendaMonth>
    })
  }

  onRouteToAgenda = (month: string) => {
    this.route.navigate(['/agendas', month])
  }

  ngOnInit(): void {
    this.getAgendaMonths();
  }

}
