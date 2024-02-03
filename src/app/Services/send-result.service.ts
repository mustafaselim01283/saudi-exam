import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { result } from '../intrfaces/sections';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendResultService {

  constructor(private clint:HttpClient) { }

 public sendResult(res:result) : Observable<string> {
    
     return this.clint.post<string>("https://localhost:7157/api/result",res)
  }
}
