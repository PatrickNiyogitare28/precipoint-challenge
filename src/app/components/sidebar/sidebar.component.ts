import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IRoute } from 'src/app/types/route';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public showCourses: boolean = false;

  constructor(private route: Router) {
    
   }

  onRoute(path: string){
    this.route.navigate([`/${path}`])
  }

  onDetectActiveTab = () => {
   const url = this.route.url;
   if(url.toLocaleLowerCase().includes('agendas')){
    this.showCourses = false
   }
   else{
     this.showCourses = true;
   }
  }
  ngOnInit(): void {
    this.onDetectActiveTab();
  }

}
