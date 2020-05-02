import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalDemoComponent } from './portal-demo/portal-demo.component';
import { PortalDemo2Component } from './portal-demo2/portal-demo2.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    PortalDemoComponent,
    PortalDemo2Component
  ],
  exports: [
    PortalDemoComponent,
    PortalDemo2Component
  ]
})
export class DocPortalModule { }
