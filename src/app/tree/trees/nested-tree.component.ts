import { Component } from '@angular/core';
import { FoodNode, TREE_DATA } from '../../models/tree-data';

@Component({
  selector: 'icc-doc-nested-tree',
  template: `
    <icc-table
      [tableConfigs]="{
        'tableType': 'nestedTree',
        'enableTableSideMenu': true
      }"
      [data]="data">
    </icc-table>
  `,
})

export class DocNestedTreeComponent {
  data: FoodNode[] = TREE_DATA;
}

