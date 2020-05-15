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
  {
    path: 'layouts', loadChildren: './layouts/layouts.module#DocLayoutsModule',
  },
  {
    path: 'layout-column', loadChildren: './layout-column/layout-column.module#DocLayoutColumnModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
