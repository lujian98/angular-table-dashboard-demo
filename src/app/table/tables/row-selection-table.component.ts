import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-row-selection-table',
  template: `
    <icc-table
      [tableConfigs]="{
        'enableRowSelection': true
      }"
      [columnConfigs]="columnConfigs"
      [data]="data">
    </icc-table>
  `,
})
export class DocRowSelectionTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', fixedWidth: 'auto' },
    { name: 'brand', title: 'Brand', fixedWidth: 'auto' },
    { name: 'color', title: 'Color', fixedWidth: 'auto' }
  ];
  data: Vehicle[] = VehicleData;
}

