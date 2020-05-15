import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocDashboardComponent } from './dashboard.component';
import { DocDashboardDemo1Component } from './dashboards/dashboard-demo1.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: DocDashboardComponent,
    children: [
      { path: 'dashboard-demo', component: DocDashboardDemo1Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocDashboardRoutingModule { }
