import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'multi-step',
    loadChildren: () => import('./form/form.module').then((m) => m.FormModule),
  },
  {
    path: '**',
    redirectTo: 'multi-step',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
