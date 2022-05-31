import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private baseAPI = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  
  getMothns = () => {
    return this.http.get(this.baseAPI+'/months')
  }

  getTasksByMonth = (id: number) => {
    return this.http.get(this.baseAPI+'/activities?monthId='+id)
  }

  getTasksById = (id: number) => {
    return this.http.get(this.baseAPI+'/activities/'+id)
  }

  getMonthByName = (label: string) => {
    return this.http.get(this.baseAPI+'/months?label='+label)
  }
}
