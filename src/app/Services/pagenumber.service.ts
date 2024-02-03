import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { top3srctions } from '../intrfaces/sections';

@Injectable({
  providedIn: 'root'
})
export class PagenumberService {

  constructor() { }

  public pageNumber$=new BehaviorSubject<number>(0);

  public finalResult$=new BehaviorSubject<top3srctions>({ 
    firstSection:"",
    secondSection:"",
    thirdSection:""});
}
