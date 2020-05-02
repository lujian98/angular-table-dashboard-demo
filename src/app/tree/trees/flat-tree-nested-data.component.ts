import { Component, OnInit } from '@angular/core';
import { IccColumnConfig, ItemNode } from 'icc9';

const MAX_LEVELS = 220; // 2500/3 for 100,000 node
const MAX_NODES_PER_LEVEL = 3;

@Component({
  selector: 'icc-doc-flat-tree-nested-data',
  template: `
    <icc-table
      [tableConfigs]="{
        'tableType': 'flatTree',
        'isNestedData': true,
        'enableTableSideMenu': true
      }"
      [data]="nestTreeData"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})

export class DocFlatTreeNestedDataComponent implements OnInit {
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
  nestTreeData: ItemNode[] = [];

  ngOnInit() {
    for (let i = 0; i < MAX_LEVELS; i++) {
      this.nestTreeData.push(this.generateNode(0, i));
    }
  }

  generateNode(level: number, index: number): ItemNode {
    const children: ItemNode[] = [];
    if (level < MAX_NODES_PER_LEVEL) {
      for (let i = 0; i < MAX_NODES_PER_LEVEL; i++) {
        children.push(this.generateNode(level + 1, i));
      }
    }

    if (children.length > 0) {
      return {
        name: 'index ' + index + ' level ' + level,
        children,
      };
    } else {
      return {
        name: 'index ' + index + ' level ' + level
      };
    }
  }
}

