import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitGuard } from 'src/app/guardians/recruit/recruit.guard';
import { RecruiterGuard } from 'src/app/guardians/recruiter/recruiter.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: 'recruit',
    canActivate: [RecruitGuard],
    loadChildren: () => import('./pages/recruit/recruit.module').then((lz) => lz.RecruitModule),
  },
  {
    path: 'recruiter',
    canActivate: [RecruiterGuard],
    loadChildren: () => import('./pages/recruiter/recruiter.module').then((lz) => lz.RecruitModule),
  },
  {
    path: 'login',
    pathMatch: 'prefix',
    component: LoginComponent,
  },
  {
    path: 'register',
    pathMatch: 'prefix',
    component: RegisterComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: NavbarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
