import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-sort-table',
  template: `
    <icc-table
      [tableConfigs]="{'enableColumnSort': true}"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})

export class DocSortTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', fixedWidth: 'auto' },
    { name: 'brand', title: 'Brand', fixedWidth: 'auto' },
    { name: 'color', title: 'Color', fixedWidth: 'auto' }
  ];
  data: Vehicle[] = VehicleData;
}

