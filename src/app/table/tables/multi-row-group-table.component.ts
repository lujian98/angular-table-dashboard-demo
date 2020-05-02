import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-multi-row-group-table',
  template: `
    <icc-table
      [tableConfigs]="{
        'enableMultiRowGroup': true,
        'enableMultiColumnSort': true
      }"
      [columnConfigs]="columnConfigs"
      [data]="data">
    </icc-table>
  `,
})
export class DocMultiRowGroupTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', fixedWidth: 'auto', groupField: true, },
    { name: 'brand', title: 'Brand', fixedWidth: 'auto', groupField: true, },
    { name: 'color', title: 'Color', fixedWidth: 'auto', groupField: true, }
  ];
  data: Vehicle[] = VehicleData;
}

