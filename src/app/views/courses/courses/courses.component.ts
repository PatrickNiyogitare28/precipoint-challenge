import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/courses/course.service';
import { Course } from 'src/app/types/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Array<Course> = [];
  constructor(private coursesService: CourseService, private router: Router) { }

  getCourses = () => {
     const res =  this.coursesService.getCourses();
     res.subscribe((data) => {
       this.courses = data as Array<Course>;
     })
     console.log(JSON.stringify(this.courses))
  }

  onRouteToCourse = (id: number) => {
    this.router.navigate([`/courses`, id])
  }

  ngOnInit(): void {
    this.getCourses();
  }

}
