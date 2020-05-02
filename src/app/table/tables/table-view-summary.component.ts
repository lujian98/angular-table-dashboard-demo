import { Component } from '@angular/core';
import { IccColumnConfig, IccDataSourceService } from 'icc9';
import { DocLargeDataSourceService } from '../services/large-data-source.service';

@Component({
  selector: 'icc-doc-table-view-summary',
  template: `
    <icc-table
      [tableConfigs]="{
        'enableTableViewSummary': true
      }"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
  providers: [
    {
      provide: IccDataSourceService,
      useClass: DocLargeDataSourceService
    }
  ]
})
export class DocTableViewSummaryComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'index', title: '#row', type: 'number', fixedWidth: 'auto' },
    { name: 'vin', title: 'Vin', fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', fixedWidth: 'auto' },
    { name: 'brand', title: 'Brand', fixedWidth: 'auto' },
    { name: 'color', title: 'Color', fixedWidth: 'auto' }
  ];
}

