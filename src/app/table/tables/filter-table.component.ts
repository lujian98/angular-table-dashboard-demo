import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-filter-table',
  template: `
    <icc-table
      [tableConfigs]="{'enableColumnFilter': true}"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `
})
export class DocFilterTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', fixedWidth: 'auto', filterField: true },
    { name: 'year', title: 'Year', type: 'number', fixedWidth: 'auto' },
    { name: 'brand', title: 'Brand', fixedWidth: 'auto', filterField: true },
    { name: 'color', title: 'Color', fixedWidth: 'auto', filterField: true }
  ];
  data: Vehicle[] = VehicleData;
}

