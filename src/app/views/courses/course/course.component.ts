import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/courses/course.service';
import { Case } from 'src/app/types/case';
import { NavigateBack } from 'src/app/utils/navigate-back';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  public cases: Array<Case> = [];

  constructor(private route: Router, private courseService: CourseService, private activeRoute: ActivatedRoute) { }
  
  getCases = () => {
    const id: number =  parseInt(this.activeRoute.snapshot.paramMap.get('id') as string);
    const res = this.courseService.getCaseByCourseId(id)
    res.subscribe((data) => {
      this.cases = data as Array<Case>
    })
  }
 
  ngOnInit(): void {
    this.getCases();
  }

}
