import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IccPanelModule, IccResizeModule } from 'icc9';

import { LayoutColumnComponent } from './layout-column.component';
import { PanelExampleModule } from '../panel/panel-example.module';


import { DocLayoutColumnRoutingModule } from './layout-column-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IccPanelModule,
    IccResizeModule,
    PanelExampleModule,
    DocLayoutColumnRoutingModule
  ],
  declarations: [
    LayoutColumnComponent,
  ],
  entryComponents: [
    LayoutColumnComponent
  ],
})
export class DocLayoutColumnModule { }
