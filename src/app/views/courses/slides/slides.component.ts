import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/courses/course.service';
import { Case } from 'src/app/types/case';
import { Course } from 'src/app/types/course';
import { Slide } from 'src/app/types/slide';
import { BreadCrumbHandler } from 'src/app/utils/bread-crumb';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  public slides: Array<Slide> = []
  private caseId: number = 0;

  constructor(
    private courseService: CourseService, 
    private activeRoute: ActivatedRoute, 
    private route: Router, 
    private breadCrumbHandler: BreadCrumbHandler
    ) { }

  getSlideByCaseId = () => {
    const caseId: number = parseInt(this.activeRoute.snapshot.paramMap.get('caseId') as string)
    this.caseId = caseId;
    const res = this.courseService.getSlidesByCaseId(caseId)
    res.subscribe((data) => {
      this.slides = data as Array<Slide>
    })
  }

  onRouteToSlide = (id: number) => {
    const courseId: number = parseInt(this.activeRoute.snapshot.paramMap.get('courseId') as string)
    this.route.navigate(['/courses', courseId, this.caseId, id])
  }

  setBreadCrumb = () => {
    const casesRes = this.courseService.getCaseById(this.caseId);
    casesRes.subscribe((data) => {
      const courseCase = data as Case;
      const courseRes = this.courseService.getCoursesById(courseCase.courseId);
      courseRes.subscribe((data) => {
        const course = data as Course;
        this.breadCrumbHandler.setBreadCrumb(`Course / ${course.name} / ${courseCase.name}`)
      })
    })
  }
  ngOnInit(): void {
    this.getSlideByCaseId();
    this.setBreadCrumb();
  }

}
