import { Component } from '@angular/core';
import { FoodNode, TREE_DATA } from '../../models/tree-data';

@Component({
  selector: 'icc-doc-nested-tree',
  template: `
    <icc-table width="315px"
      [tableConfigs]="{
        'tableType': 'nestedTree',
        'enableTableSideMenu': true,
        'enableColumnResize': true
      }"
      [data]="data">
    </icc-table>
  `,
})

export class DocNestedTreeComponent {
  data: FoodNode[] = TREE_DATA;
}

