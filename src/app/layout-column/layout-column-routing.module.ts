import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutColumnComponent } from './layout-column.component';
import { PanelExampleComponent } from '../panel/panel-example.component';

const routes: Routes = [
  {
    path: 'layout-column',
    component: LayoutColumnComponent,
    children: [
      { path: 'panel-example', component: PanelExampleComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocLayoutColumnRoutingModule { }
