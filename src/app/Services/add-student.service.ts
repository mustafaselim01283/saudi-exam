import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../intrfaces/sections';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddStudentService {

  constructor(private clint:HttpClient) { 

  }

 public addStudentData(stu:student): Observable<string> {
  return  this.clint.post<string>("https://localhost:7157/api/Student",stu)

      }
}
