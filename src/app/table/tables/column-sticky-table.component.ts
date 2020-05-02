import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-column-sticky-table',
  template: `
    <icc-table
      [tableConfigs]="{
        'enableColumnSticky': true,
        'enableColumnResize': true
      }"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})
export class DocColumnStickyTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', menu: true, fixedWidth: 'auto' },
    { name: 'year', title: 'Year', menu: true, type: 'number', width: 200},
    { name: 'brand', title: 'Brand', menu: true, width: 200 },
    { name: 'color', title: 'Color', menu: true, width: 200 }
  ];
  data: Vehicle[] = VehicleData;
}

