import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from 'src/app/services/agendas/agenda.service';
import { AgendaActivity } from 'src/app/types/agenda-activity';
import { AgendaMonth } from 'src/app/types/agenda-month';
import { BreadCrumbHandler } from 'src/app/utils/bread-crumb';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  public month: AgendaMonth = {} as AgendaMonth;
  public activities: Array<AgendaActivity> = [];
  constructor(
    private activeRoute: ActivatedRoute, 
    private agendaService: AgendaService, 
    private route: Router,
    private breadCrumbHandler: BreadCrumbHandler
    ) { }

  getMonthActivities = () => {
    const monthLabel: string = this.activeRoute.snapshot.paramMap.get('month') as string;
    const monthRes = this.agendaService.getMonthByName(monthLabel)
    monthRes.subscribe((data) => {
      this.month = (data as Array<AgendaMonth>)[0];
       const activitiesRes = this.agendaService.getTasksByMonth(this.month.id);
       activitiesRes.subscribe((data) => {
      this.activities = data as Array<AgendaActivity>
    })
    })
  }

  onRouteToActivity = (id: number) => {
     this.route.navigate(['/agendas', this.month.label, id])
  }

  setBreadCrumb = () => {
    const agendaMonth = this.activeRoute.snapshot.paramMap.get('month');
    this.breadCrumbHandler.setBreadCrumb(`Agendas / ${agendaMonth}`);
  }

  ngOnInit(): void {
    this.getMonthActivities();
    this.setBreadCrumb();
  }

}
