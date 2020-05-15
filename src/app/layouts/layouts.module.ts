import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IccPanelModule, IccResizeModule } from 'icc9';

import { LayoutsComponent } from './layouts.component';
import { PanelExampleModule } from '../panel/panel-example.module';
import { DocPopoverModule } from '../components/popover/popover.module';



import { DocLayoutsRoutingModule } from './layouts-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IccPanelModule,
    IccResizeModule,
    PanelExampleModule,
    DocPopoverModule,
    DocLayoutsRoutingModule
  ],
  declarations: [
    LayoutsComponent,
  ],
  entryComponents: [
    LayoutsComponent,
  ],
})
export class DocLayoutsModule { }
