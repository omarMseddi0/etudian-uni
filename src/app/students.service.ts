import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';
import { Students } from './students';
import { Specialiter } from './specialiter';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost/Gest-Universitaire/api/';

  getStudents() {
    return this.http.get<Students[]>(this.baseUrl+'view.php');
  }

  getSpecialiters() {
    return this.http.get<Specialiter[]>(this.baseUrl+'views.php');
  }

  getSingleStudent(id: any) {
    return this.http.get<Students[]>(this.baseUrl+'view.php?id='+id);
  }

  deleteStudent(id: any) {
    console.log(id);
    return this.http.delete(this.baseUrl+'delete.php?id='+ id);
  }

  createStudent(student: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl + '/insert.php', JSON.stringify(student), { headers: headers });
  }

  editStudent(student: any) {
    return this.http.put(this.baseUrl+'update.php', student);
  }
}
