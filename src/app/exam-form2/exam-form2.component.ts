import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PagenumberService } from '../Services/pagenumber.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exam-form2',
  templateUrl: './exam-form2.component.html',
  styleUrls: ['./exam-form2.component.css']
})
export class ExamForm2Component {

  constructor(private page:PagenumberService){

  }

  total:number[]=[]

  @Input() formNumber:number=0
  @Input() quitions?:string[][]

  @Output() formTotalResult=new EventEmitter<number[]>()

  currentPage:number=0

ngOnInit(): void {
  this.page.pageNumber$.subscribe((d)=>{
    this.currentPage=d
  })
}

form=new FormGroup({
  quition1:new FormControl<number>(0,[]),
  quition2:new FormControl<number>(0,[]),
  quition3:new FormControl<number>(0,[]),
  quition4:new FormControl<number>(0,[]),
  quition5:new FormControl<number>(0,[]),
  quition6:new FormControl<number>(0,[])

})

handelNext(e:Event){

  e.preventDefault()
  let formValue = this.form.value;
  
  (Object.keys(formValue) as (keyof typeof formValue)[]).forEach((key, index) => {

  this.total.push(+formValue[key]!)
  })

  console.log(this.total);
  console.log(this.formNumber);
  
  
  this.formTotalResult.emit(this.total)
  this.page.pageNumber$.next(this.currentPage+1)

  window.scrollTo(0,0)
  

}

}
