import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgendaService } from 'src/app/services/agendas/agenda.service';
import { AgendaActivity } from 'src/app/types/agenda-activity';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  public activity: AgendaActivity = {} as AgendaActivity;

  constructor(private agendaService: AgendaService, private activeRoute: ActivatedRoute) { }

  getActivity = () => {
    const activityId: number = parseInt(this.activeRoute.snapshot.paramMap.get('agendaId') as string);
    const res = this.agendaService.getTasksById(activityId);
    res.subscribe((data) => {
      this.activity = data as AgendaActivity;
    })
  }
  ngOnInit(): void {
    this.getActivity()
  }

}
