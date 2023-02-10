import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';

import { PersonalComponent } from './pages/personal/personal.component';
import { PlanComponent } from './pages/plan/plan.component';
import { PickComponent } from './pages/pick/pick.component';
import { FinishComponent } from './pages/finish/finish.component';

@NgModule({
  declarations: [
    PersonalComponent,
    PlanComponent,
    PickComponent,
    FinishComponent,
  ],
  imports: [CommonModule, FormRoutingModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
