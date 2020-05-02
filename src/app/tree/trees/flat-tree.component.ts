import { Component } from '@angular/core';
import { FlatTreeNode } from 'icc9';
import { LEVEL_TREE_DATA } from '../../models/level-tree-data';

@Component({
  selector: 'icc-doc-flat-tree',
  template: `
    <icc-table
      [tableConfigs]="{
        'tableType': 'flatTree',
        'enableTableSideMenu': true
      }"
      [data]="data">
    </icc-table>
  `,
})

export class DocFlatTreeComponent {
  data: FlatTreeNode[] = LEVEL_TREE_DATA;
}

