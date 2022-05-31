import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IRoute } from 'src/app/types/route';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routes: Array<IRoute> = [
    {
      label: 'Courses',
      path: '/courses',
    },
    {
      label: 'Agenda',
      path: '/agendas',
    }
  ]

  constructor(private route: Router) { }

  onRoute(path: string){
    this.route.navigate([`/${path}`])
  }

  ngOnInit(): void {
  }

}
