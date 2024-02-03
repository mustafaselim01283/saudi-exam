import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PagenumberService } from '../Services/pagenumber.service';

@Component({
  selector: 'app-exam-form',
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.css']
})
export class ExamFormComponent implements OnInit{

  constructor(private page:PagenumberService){

  }

  total:number=0

  @Input() formNumber:number=0
  @Input() quitions?:string[][]

  @Output() formTotalResult=new EventEmitter<number>()

  currentPage:number=0

ngOnInit(): void {
  this.page.pageNumber$.subscribe((d)=>{
    this.currentPage=d


    
  })
}


form=new FormGroup({
  quition1:new FormControl<string>("",[]),
  quition2:new FormControl<string>("",[]),
  quition3:new FormControl<string>("",[]),
  quition4:new FormControl<string>("",[]),
  quition5:new FormControl<string>("",[]),
  quition6:new FormControl<string>("",[]),
  quition7:new FormControl<string>("",[]),
  quition8:new FormControl<string>("",[]),
  quition9:new FormControl<string>("",[]),
  quition10:new FormControl<string>("",[]),
  quition11:new FormControl<string>("",[]),
  quition12:new FormControl<string>("",[]),
  quition13:new FormControl<string>("",[]),
  quition14:new FormControl<string>("",[]),

})

handelNext(e:Event){
  e.preventDefault()
  let formValue = this.form.value;
  
  (Object.keys(formValue) as (keyof typeof formValue)[]).forEach((key, index) => {

    if (formValue[key] == "yes") {
      this.total++
    }
  })
  
  this.formTotalResult.emit(this.total)
  this.page.pageNumber$.next(this.currentPage+1)

  window.scrollTo(0,0)
  

}

}
