import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-horizontal-scrollbar-table',
  template: `
    <icc-table
      [tableConfigs]="{
        'enableColumnResize': true
      }"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})
export class DocHorizontalScrollbarTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', width: 200, fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', width: 500 },
    { name: 'brand', title: 'Brand', width: 400 },
    { name: 'color', title: 'Color', width: 200 }
  ];
  data: Vehicle[] = VehicleData;
}

