import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { student } from '../intrfaces/sections';
import { AddStudentService } from '../Services/add-student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  constructor(private sendStudent:AddStudentService ,private router:Router){

  }

  done:boolean=false

  registerForm= new FormGroup({
    name:new FormControl<string>("",[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    age:new  FormControl<number>(0,[ Validators.required,Validators.min(10),Validators.max(80)]),
    phone:new FormControl<string>("",[Validators.required]),
    email:new FormControl<string>("",[Validators.required,Validators.email]),
    gender:new FormControl<string>("",[Validators.required]),
    school:new FormControl<string>("",[Validators.required]),
    grade:new FormControl<string>("",[Validators.required]),
    location:new FormControl<string>("",[Validators.required])
  })

  handleSubmit(e:Event){
   e.preventDefault()
  }


  submitUserData(){
    this.done=true

    let studentData:student={
      Name:this.registerForm.controls.name.value!,
      age:this.registerForm.controls.age.value!,
      phone:(this.registerForm.controls.phone.value!).toString(),
      email:this.registerForm.controls.email.value!,
      gender:this.registerForm.controls.gender.value!,
      school:this.registerForm.controls.school.value!,
      grade:this.registerForm.controls.grade.value!,
      location:this.registerForm.controls.location.value!,


    }

console.log(studentData);

    this.sendStudent.addStudentData(studentData).subscribe({
      next:(data)=>{
        console.log(data);
  
        localStorage.setItem("userID",data)
        
        this.router.navigateByUrl("/exam")
      }
    })
  
    
  }
}
