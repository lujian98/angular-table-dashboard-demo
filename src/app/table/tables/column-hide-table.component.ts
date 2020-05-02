import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-column-hide-table',
  template: `
    <icc-table
      [tableConfigs]="{'enableColumnHide': true}"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})

export class DocColumnHideTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', menu: true, fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', menu: true, fixedWidth: 'auto' },
    { name: 'brand', title: 'Brand', menu: true, fixedWidth: 'auto' },
    { name: 'color', title: 'Color', menu: true, fixedWidth: 'auto' }
  ];
  data: Vehicle[] = VehicleData;
}

