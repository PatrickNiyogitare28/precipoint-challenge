import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { 

    
  }
  public getCourses = () => {
    return this.http.get('http://localhost:3000/courses')
  }

  public getCoursesById = (id: number) => {
    return this.http.get('http://localhost:3000/courses/'+id)
  }

  public getCaseByCourseId = (id: number) => {
    return this.http.get('http://localhost:3000/cases?courseId='+id)
  }

  public getCaseById = (id: number) => {
    return this.http.get('http://localhost:3000/cases/'+id)
  }

  public getSlidesByCaseId = (id: number) => {
    return this.http.get('http://localhost:3000/slides?caseId='+id)
  }

  public getSlideById = (id: number) => {
    return this.http.get('http://localhost:3000/slides/'+id)
  }

  public getStudents = () => {
    return this.http.get('http://localhost:3000/students')
  }

  public getStudentById = (id: string) => {
    return this.http.get('http://localhost:3000/students/'+id)
  }
}
