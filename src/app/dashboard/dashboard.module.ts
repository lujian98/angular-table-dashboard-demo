import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IccPanelModule } from 'icc9';
import { IccDashboardModule } from 'icc9';

import { DocPortalModule } from '../portal/portal.module';

import { DocDashboardComponent } from './dashboard.component';
import { DocDashboardDemo1Component } from './dashboards/dashboard-demo1.component';

import { DocDashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IccPanelModule,
    IccDashboardModule,
    DocPortalModule,
    DocDashboardRoutingModule,
  ],
  declarations: [
    DocDashboardComponent,
    DocDashboardDemo1Component,
  ],
  exports: [
    DocDashboardComponent,
    DocDashboardDemo1Component,
  ]
})
export class DocDashboardModule { }
