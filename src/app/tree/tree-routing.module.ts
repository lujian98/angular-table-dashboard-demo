import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocTreeComponent } from './tree.component';

import { DocNestedTreeComponent } from './trees/nested-tree.component';
import { DocFlatTreeComponent } from './trees/flat-tree.component';
import { DocNestedTreeGridComponent } from './trees/nested-tree-grid.component';
import { DocFlatTreeGridComponent } from './trees/flat-tree-grid.component';
import { DocFlatTreeNestedDataComponent } from './trees/flat-tree-nested-data.component';


const routes: Routes = [
  {
    path: 'tree',
    component: DocTreeComponent,
    children: [
      { path: 'nested-tree', component: DocNestedTreeComponent },
      { path: 'flat-tree', component: DocFlatTreeComponent },
      { path: 'nested-tree-grid', component: DocNestedTreeGridComponent },
      { path: 'flat-tree-grid', component: DocFlatTreeGridComponent },
      { path: 'flat-tree-nested-data', component: DocFlatTreeNestedDataComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocTreeRoutingModule { }
