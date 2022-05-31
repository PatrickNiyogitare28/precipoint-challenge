import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/courses/course.service';
import { Case } from 'src/app/types/case';
import { Course } from 'src/app/types/course';
import { Slide } from 'src/app/types/slide';
import { BreadCrumbHandler } from 'src/app/utils/bread-crumb';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
   
  public course: Course = {} as Course;
  public case: Case = {}  as Case;
  public slide: Slide = {} as Slide;

  constructor(
    private route: Router, 
    private courseService: CourseService, 
    private activeRoute: ActivatedRoute,
    private breadCrumbHandler: BreadCrumbHandler
    ) { }

  getSlideData = () => {
    const courseId: number = parseInt(this.activeRoute.snapshot.paramMap.get('courseId') as string)
    const caseId: number = parseInt(this.activeRoute.snapshot.paramMap.get('caseId') as string)
    const slideId: number = parseInt(this.activeRoute.snapshot.paramMap.get('slideId') as string)
    const courseDataRes = this.courseService.getCoursesById(courseId);
    courseDataRes.subscribe((data) => {
      this.course = data as Course;
      this.setBreadCrumb()
    })
    const caseDataRes = this.courseService.getCaseById(caseId);
    caseDataRes.subscribe((data) => {
      this.case = data as Case;
      this.setBreadCrumb();
    })
    const slideDataRes = this.courseService.getSlideById(slideId);
    slideDataRes.subscribe((data) => {
      this.slide = data as Slide;
      this.setBreadCrumb();
    })
  }

  setBreadCrumb = () => {
     this.breadCrumbHandler.setBreadCrumb(`Courses / ${this.course.name} / ${this.case.name} / ${this.slide.title}`)   
  }

  ngOnInit(): void {
    this.getSlideData();
  }

}
