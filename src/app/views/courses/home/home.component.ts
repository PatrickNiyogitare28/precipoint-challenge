import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showCourses:boolean = true;

  constructor() { }

  public onShowCourses = (value: boolean) : void => {
    this.showCourses = value;
  }

  ngOnInit(): void {
  }

}
