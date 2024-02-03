import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { students } from '../intrfaces/sections';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetallstudentService {

  constructor(private clint:HttpClient) { }

  getAll():Observable<students[]>{
    return this.clint.get<students[]>("https://localhost:7157/api/Student")
  }
}
