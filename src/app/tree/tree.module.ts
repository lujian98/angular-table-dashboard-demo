import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IccPanelModule } from 'icc9';
import { IccTableModule } from 'icc9';

import { DocTreeComponent } from './tree.component';
import { DocNestedTreeComponent } from './trees/nested-tree.component';
import { DocFlatTreeComponent } from './trees/flat-tree.component';
import { DocNestedTreeGridComponent } from './trees/nested-tree-grid.component';
import { DocFlatTreeGridComponent } from './trees/flat-tree-grid.component';
import { DocFlatTreeNestedDataComponent } from './trees/flat-tree-nested-data.component';

import { DocTreeRoutingModule } from './tree-routing.module';

@NgModule({
  declarations: [
    DocTreeComponent,
    DocNestedTreeComponent,
    DocFlatTreeComponent,
    DocFlatTreeNestedDataComponent,
    DocNestedTreeGridComponent,
    DocFlatTreeGridComponent
  ],
  imports: [
    CommonModule,
    IccPanelModule,
    IccTableModule,
    DocTreeRoutingModule
  ],
  providers: [],
  entryComponents: [
    DocTreeComponent,
    DocNestedTreeComponent,
    DocFlatTreeComponent,
    DocFlatTreeNestedDataComponent,
    DocNestedTreeGridComponent,
    DocFlatTreeGridComponent
  ],
})
export class DocTreeModule { }
