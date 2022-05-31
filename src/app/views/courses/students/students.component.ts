import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/courses/course.service';
import { Student } from 'src/app/types/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  public students: Array<Student> = [];
  constructor(private courseService: CourseService, private route: Router) { }

  getStudents = () => {
    const res = this.courseService.getStudents();
    res.subscribe((data) => {
      this.students = data as Array<Student>
    })
  }
  
  onRouteToStudentInf = (id: string) => {
    this.route.navigate(['/students', id])
  }
  ngOnInit(): void {
    this.getStudents()
  }

}
