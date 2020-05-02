import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({ // // TODO DnD will resize the grid panel height???
  selector: 'icc-doc-column-dnd-table',
  template: `
    <icc-table
      [tableConfigs]="{'enableColumnDnD': true}"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `
})
export class DocColumnDnDTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', fixedWidth: 'auto' },
    { name: 'brand', title: 'Brand', fixedWidth: 'auto' },
    { name: 'color', title: 'Color', fixedWidth: 'auto' }
  ];
  data: Vehicle[] = VehicleData;
}

