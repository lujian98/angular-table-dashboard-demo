import { Component } from '@angular/core';
import { IccColumnConfig, IccGroupHeader } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-group-header-table-table',
  template: `
    <icc-table
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})
export class DocGroupHeaderTableComponent {
  carGroupHeader: IccGroupHeader = {
    name: 'cargroup',
    title: 'Vehicle Information',
    align: 'center',
  };
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', fixedWidth: 'auto' },
    { name: 'year', title: 'Year', type: 'number', fixedWidth: 'auto', groupHeader: this.carGroupHeader },
    { name: 'brand', title: 'Brand', fixedWidth: 'auto', groupHeader: this.carGroupHeader },
    { name: 'color', title: 'Color', fixedWidth: 'auto', groupHeader: this.carGroupHeader }
  ];
  data: Vehicle[] = VehicleData;
}

