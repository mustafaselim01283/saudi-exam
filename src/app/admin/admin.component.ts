import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetallstudentService } from '../Services/getallstudent.service';
import { students } from '../intrfaces/sections';
import { DeletestuService } from '../Services/deletestu.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private getAllStudents: GetallstudentService, private del: DeletestuService) {

  }

  ngOnInit(): void {
    if (localStorage.getItem("admin")) {
      this.auth = true
    }

   this.getData()

  }

  getData(){
    this.getAllStudents.getAll().subscribe({
      next: (data) => {
        this.studentsData = data
        this.serchStudentsData = this.studentsData
        console.log(this.studentsData);

      }
    })
  }

  studentsData: students[] = []
  serchStudentsData: students[] = []
  auth: boolean = false
  eror: boolean = false

  adminEmail: string = "hae140184@gmail.com"
  password: string = "140184"


  adminForm = new FormGroup({
    email: new FormControl<string>("", [Validators.email, Validators.required]),
    pass: new FormControl<string>("", [Validators.required])
  })

  login() {
    if (this.adminForm.controls.email.value == this.adminEmail && this.adminForm.controls.pass.value == this.password) {
      this.auth = true
      localStorage.setItem("admin", "true")
    } else {
      this.eror = true
    }
  }

  stuSearch(e: Event) {

    let val: string = (e.target as HTMLInputElement).value
    console.log(val);

    this.serchStudentsData = []
    this.studentsData.forEach((s) => {
      if (s.name.includes(val)) {
        this.serchStudentsData.push(s)
      }
    })

    if (val == null) {
      this.serchStudentsData = this.studentsData
    }
  }

  deletStudent(id: string) {
    console.log(id);

    let ask = window.confirm("هل انت متأكد من مسح بيانات هذا الطالب نهائيا ؟",)

    if (ask) {
      this.del.deleteStudent(id).subscribe((data) => {
        console.log(data);
        
        this.getData()
      })

    }

  }

}
