import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { PanelExampleComponent } from '../panel/panel-example.component';
import { DocPopoverComponent } from '../components/popover/popover.component';

const routes: Routes = [
  {
    path: 'layouts',
    component: LayoutsComponent,
    children: [
      { path: 'panel-example', component: PanelExampleComponent },
      { path: 'popover-example', component: DocPopoverComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocLayoutsRoutingModule { }
