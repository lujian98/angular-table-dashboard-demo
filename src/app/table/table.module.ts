import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IccPanelModule } from 'icc9';
import { IccTableModule } from 'icc9';

import { DocTableComponent } from './table.component';
import { DocSimpleTableComponent } from './tables/simple-table.component';
import { DocSortTableComponent } from './tables/sort-table.component';
import { DocMultiSortTableComponent } from './tables/multi-sort-table.component';
import { DocFilterTableComponent } from './tables/filter-table.component';
import { DocColumnResizeTableComponent } from './tables/column-resize-table.component';
import { DocTableSideMenuComponent } from './tables/table-side-menu.component';
import { DocColumnHideTableComponent } from './tables/column-hide-table.component';
import { DocColumnMenuTableComponent } from './tables/column-menu-table.component';
import { DocDataSourceServiceTableComponent } from './tables/data-source-service-table.component';
import { DocTableViewSummaryComponent } from './tables/table-view-summary.component';


import { DocColumnDnDTableComponent } from './tables/column-dnd-table.component';
import { DocGroupHeaderTableComponent } from './tables/group-header-table.component';
import { DocHorizontalScrollbarTableComponent } from './tables/horizontal-scrollbar-table.component';
import { DocColumnStickyTableComponent } from './tables/column-sticky-table.component';

import { DocRowSelectionTableComponent } from './tables/row-selection-table.component';
import { DocMultiRowSelectionTableComponent } from './tables/multi-row-selection-table.component';

import { DocVirtualScrollTableComponent } from './tables/virtual-scroll-table.component';
import { DocRowGroupTableComponent } from './tables/row-group-table.component';
import { DocMultiRowGroupTableComponent } from './tables/multi-row-group-table.component';
import { DocLargeDataSourceService } from './services/large-data-source.service';
import { DocHugeDataSourceService } from './services/huge-data-source.service';

import { DocTableRoutingModule } from './table-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IccPanelModule,
    IccTableModule,
    DocTableRoutingModule
  ],
  declarations: [
    DocTableComponent,
    DocSimpleTableComponent,
    DocSortTableComponent,
    DocMultiSortTableComponent,
    DocFilterTableComponent,
    DocTableSideMenuComponent,
    DocColumnResizeTableComponent,
    DocColumnHideTableComponent,
    DocColumnMenuTableComponent,
    DocColumnDnDTableComponent,
    DocGroupHeaderTableComponent,
    DocHorizontalScrollbarTableComponent,
    DocColumnStickyTableComponent,
    DocRowSelectionTableComponent,
    DocMultiRowSelectionTableComponent,
    DocRowGroupTableComponent,
    DocMultiRowGroupTableComponent,
    DocDataSourceServiceTableComponent,
    DocTableViewSummaryComponent,
    DocVirtualScrollTableComponent
  ],
  entryComponents: [
    DocTableComponent,
    DocSimpleTableComponent,
    DocSortTableComponent,
    DocMultiSortTableComponent,
    DocFilterTableComponent,
    DocColumnResizeTableComponent,
    DocTableSideMenuComponent,
    DocColumnHideTableComponent,
    DocColumnMenuTableComponent,
    DocColumnDnDTableComponent,
    DocGroupHeaderTableComponent,
    DocHorizontalScrollbarTableComponent,
    DocColumnStickyTableComponent,
    DocRowSelectionTableComponent,
    DocMultiRowSelectionTableComponent,
    DocRowGroupTableComponent,
    DocMultiRowGroupTableComponent,
    DocDataSourceServiceTableComponent,
    DocTableViewSummaryComponent,
    DocVirtualScrollTableComponent
  ],
  providers: [DocLargeDataSourceService, DocHugeDataSourceService],
})
export class DocTableModule { }
