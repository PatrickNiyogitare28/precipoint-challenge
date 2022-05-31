import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from 'src/app/services/agendas/agenda.service';
import { AgendaActivity } from 'src/app/types/agenda-activity';
import { BreadCrumbHandler } from 'src/app/utils/bread-crumb';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public activity: AgendaActivity = {} as AgendaActivity;

  constructor(private agendaService: AgendaService, private activeRoute: ActivatedRoute, private breadCrumbHandler: BreadCrumbHandler) { }

  getActivity = () => {
    const activityId: number = parseInt(this.activeRoute.snapshot.paramMap.get('agendaId') as string);
    const res = this.agendaService.getTasksById(activityId);
    res.subscribe((data) => {
      this.activity = data as AgendaActivity;
      this.setBreadCrumb();
    })
  }

  setBreadCrumb = () => {
    const agendaMonth = this.activeRoute.snapshot.paramMap.get('month');
    this.breadCrumbHandler.setBreadCrumb(`Agendas / ${agendaMonth} / ${this.activity.title}`);
  }

  ngOnInit(): void {
    this.getActivity()
  }

}
