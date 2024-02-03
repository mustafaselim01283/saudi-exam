import { Component, OnInit } from '@angular/core';
import { PagenumberService } from '../Services/pagenumber.service';
import { top3srctions } from '../intrfaces/sections';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
   
    constructor(private finaldata:PagenumberService){

    }

 data?:top3srctions

  ngOnInit(): void {
     this.finaldata.finalResult$.subscribe((d)=>{
     this.data=d
     })
  }
}
