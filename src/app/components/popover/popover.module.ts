import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IccPopoverModule } from 'icc9';
import { DocPopoverComponent } from './popover.component';
import { DocpopoverDemoComponent } from './popover-demo/popover-demo.component';

@NgModule({
  imports: [
    CommonModule,
    IccPopoverModule,
  ],
  declarations: [
    DocPopoverComponent,
    DocpopoverDemoComponent
  ],
  exports: [
    DocPopoverComponent,
    DocpopoverDemoComponent
  ],
  entryComponents: [
    DocPopoverComponent,
    DocpopoverDemoComponent
  ]
})
export class DocPopoverModule { }
