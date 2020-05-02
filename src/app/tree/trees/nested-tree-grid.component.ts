import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { FoodNode, TREE_DATA } from '../../models/tree-data';

@Component({
  selector: 'icc-doc-nested-tree',
  template: `
    <icc-table
      [tableConfigs]="{
        'tableType': 'nestedTree',
        'enableTableSideMenu': true,
        'enableColumnResize': true
      }"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})

export class DocNestedTreeGridComponent {
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
  data: FoodNode[] = TREE_DATA;
}

