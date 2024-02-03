import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { ResultsComponent } from './results/results.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { examGurdGuard } from './Gardes/exam-gurd.guard';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"exam",canActivate:[examGurdGuard],component:ExamComponent},
  {path:"results",component:ResultsComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
