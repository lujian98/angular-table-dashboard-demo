import { Component } from '@angular/core';
import { IccColumnConfig } from 'icc9';
import { Vehicle } from '../../models/vehicle-model';
import { VehicleData } from '../../services/vehicle-data';

@Component({
  selector: 'icc-doc-simple-table',
  template: `
    <icc-table style="width: 1015px;" height="calc(100vh - 300px)"
      [data]="data"
      [columnConfigs]="columnConfigs">
    </icc-table>
  `,
})

export class DocSimpleTableComponent {
  columnConfigs: IccColumnConfig[] = [
    { name: 'vin', title: 'Vin', width: 250 },
    { name: 'year', title: 'Year', type: 'number', width: 250 },
    { name: 'brand', title: 'Brand', width: 250 },
    { name: 'color', title: 'Color', width: 250 }
  ];
  data: Vehicle[] = VehicleData;
}

