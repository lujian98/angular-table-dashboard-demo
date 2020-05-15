import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { IccPanelModule } from 'icc9';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';

import { DocTableModule } from './table/table.module';
import { DocTreeModule } from './tree/tree.module';
import { DocDashboardModule } from './dashboard/dashboard.module';
import { DocLayoutsModule } from './layouts/layouts.module';
import { DocLayoutColumnModule } from './layout-column/layout-column.module';


import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

    IccPanelModule,

    DocTableModule,
    DocTreeModule,
    DocDashboardModule,
    DocLayoutsModule,
    DocLayoutColumnModule,

    AppRoutingModule
  ],
  providers: [],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
