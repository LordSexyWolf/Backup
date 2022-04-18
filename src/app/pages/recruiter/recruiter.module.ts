import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecruiterComponent } from "./recruiter.component";


const routes: Routes = [
    {
        path: '', component: RecruiterComponent
    }
];
@NgModule({
    declarations: [RecruiterComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class RecruitModule { }