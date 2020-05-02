import { Component } from '@angular/core';
import { IccColumnConfig, IccDataSourceService } from 'icc9';
import { DocHugeDataSourceService } from '../services/huge-data-source.service';

@Component({
  selector: 'icc-doc-virtual-scroll-table',
  template: `
    <icc-table
      [tableConfigs]="{
        'enableColumnSort': true,
        'enableTableViewSummary': true,
        'enableGridSideMenu': true
      }"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
  providers: [
    {
      provide: IccDataSourceService,
      useClass: DocHugeDataSourceService
    }
  ]
})
export class DocVirtualScrollTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'index', title: '#row', type: 'number', fixedWidth: 'auto' },
    { name: 'vin', title: 'Vin', fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', fixedWidth: 'auto' },
    { name: 'brand', title: 'Brand', fixedWidth: 'auto' },
    { name: 'color', title: 'Color', fixedWidth: 'auto' }
  ];
}

