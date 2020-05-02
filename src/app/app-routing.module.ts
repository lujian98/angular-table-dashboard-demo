import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'table', loadChildren: './table/table.module#DocTableModule',
  },
  {
    path: 'tree', loadChildren: './tree/tree.module#DocTreeModule',
  },
  {
    path: 'dashboard', loadChildren: './dashboard/dashboard.module#DocDashboardModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
