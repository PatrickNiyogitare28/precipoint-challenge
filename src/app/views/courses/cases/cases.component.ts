import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/courses/course.service';
import { Case } from 'src/app/types/case';
import { Course } from 'src/app/types/course';
import { BreadCrumbHandler } from 'src/app/utils/bread-crumb';
import { NavigateBack } from 'src/app/utils/navigate-back';

@Component({
  selector: 'app-course',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  private courseId: number = 0;
  public cases: Array<Case> = [];

  constructor(
    private route: Router, 
    private courseService: CourseService, 
    private activeRoute: ActivatedRoute,
    private breadCrumbHandler: BreadCrumbHandler
    ) { }
  
  getCases = () => {
    const id: number =  parseInt(this.activeRoute.snapshot.paramMap.get('id') as string);
    this.courseId = id;
    const res = this.courseService.getCaseByCourseId(id)
    res.subscribe((data) => {
      this.cases = data as Array<Case>
    })
  }

  onRouteToSlides = (caseId: number) => {
    this.route.navigate(['/courses', this.courseId, caseId])
  }

  setBreadCrumb = () => {
    const courseRes = this.courseService.getCoursesById(this.courseId);
    courseRes.subscribe((data) => {
      const course = data as Course;
      this.breadCrumbHandler.setBreadCrumb(`Courses / `+course.name)
    })
  }

  ngOnInit(): void {
    this.getCases();
    this.setBreadCrumb();
  }

}
