import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletestuService {

  constructor(private clint:HttpClient) { }

  deleteStudent(id:string):Observable<boolean>{
    return this.clint.delete<boolean>(`https://localhost:7157/api/Student/delete/id?id=${id}`)
  }
}
