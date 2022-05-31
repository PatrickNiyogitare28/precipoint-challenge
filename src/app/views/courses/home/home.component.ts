import { Component, OnInit } from '@angular/core';
import { BreadCrumbHandler } from 'src/app/utils/bread-crumb';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showCourses:boolean = true;

  constructor(private breadCrumbHandler: BreadCrumbHandler) { }

  public onShowCourses = (value: boolean) : void => {
    if(value){
      this.breadCrumbHandler.setBreadCrumb('Courses')
    }
    else{
      this.breadCrumbHandler.setBreadCrumb('Students')
    }
    this.showCourses = value;
  }

  setBreadCrumb = () => {
    this.breadCrumbHandler.setBreadCrumb('Courses')
  }
  ngOnInit(): void {
    this.setBreadCrumb();
  }

}
