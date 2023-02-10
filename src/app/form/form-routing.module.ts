import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishComponent } from './pages/finish/finish.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { PickComponent } from './pages/pick/pick.component';
import { PlanComponent } from './pages/plan/plan.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'your-info',
        component: PersonalComponent,
      },
      {
        path: 'select-plan',
        component: PlanComponent,
      },
      {
        path: 'add-ons',
        component: PickComponent,
      },
      {
        path: 'summary',
        component: FinishComponent,
      },
      {
        path: '**',
        redirectTo: 'your-info',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRoutingModule {}
