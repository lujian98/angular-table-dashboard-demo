import { Component } from '@angular/core';
import { IccColumnConfig, FlatTreeNode } from 'icc9';
import { LEVEL_TREE_DATA } from '../../models/level-tree-data';

@Component({
  selector: 'icc-doc-flat-tree',
  template: `
    <icc-table
      [tableConfigs]="{
        'tableType': 'flatTree',
        'enableTableSideMenu': true,
        'enableColumnResize': true
      }"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})

export class DocFlatTreeGridComponent {
  columnConfigs: IccColumnConfig[] = [{
    name: 'name',
    width: 400,
    fixedWidth: 'auto'
  },
  {
    name: 'level',
    width: 200
  },
  {
    name: 'color',
    width: 250
  },
  {
    name: 'status',
    width: 100
  }];
  data: FlatTreeNode[] = LEVEL_TREE_DATA;
}

