import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecruitComponent } from "./recruit.component";

const routes: Routes = [
    {
        path: '', component: RecruitComponent
    }
];
@NgModule({
    declarations: [RecruitComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class RecruitModule{}