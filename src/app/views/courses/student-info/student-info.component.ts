import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/courses/course.service';
import { Student } from 'src/app/types/student';
import { BreadCrumbHandler } from 'src/app/utils/bread-crumb';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.scss']
})
export class StudentInfoComponent implements OnInit {

  public student: Student = {} as Student;
  constructor(private activeRoute: ActivatedRoute, private courseService: CourseService, private breadCrumbHandler: BreadCrumbHandler) { }

  getStudentInfo = () => {
    const studentId:string = this.activeRoute.snapshot.paramMap.get('studentId') as string;
    const res = this.courseService.getStudentById(studentId)
    res.subscribe((data) => {
      this.student = data as Student;
      this.setBreadCrumb();
    })
  }

  setBreadCrumb = () => {
    this.breadCrumbHandler.setBreadCrumb(`Students / ${this.student.firstName} ${this.student.lastName}`)
  }

  ngOnInit(): void {
    this.getStudentInfo()
  }

}
