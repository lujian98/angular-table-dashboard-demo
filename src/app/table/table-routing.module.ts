import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

import { DocRowSelectionTableComponent } from './tables/row-selection-table.component';
import { DocMultiRowSelectionTableComponent } from './tables/multi-row-selection-table.component';

import { DocRowGroupTableComponent } from './tables/row-group-table.component';
import { DocMultiRowGroupTableComponent } from './tables/multi-row-group-table.component';

import { DocColumnStickyTableComponent } from './tables/column-sticky-table.component';

import { DocVirtualScrollTableComponent } from './tables/virtual-scroll-table.component';

const routes: Routes = [
  {
    path: 'table',
    component: DocTableComponent,
    children: [
      { path: 'simple-table', component: DocSimpleTableComponent },
      { path: 'sort-table', component: DocSortTableComponent },
      { path: 'multi-sort-table', component: DocMultiSortTableComponent },
      { path: 'filter-table', component: DocFilterTableComponent },
      { path: 'column-dnd-table', component: DocColumnDnDTableComponent },
      { path: 'column-resize-table', component: DocColumnResizeTableComponent },
      { path: 'table-side-menu', component: DocTableSideMenuComponent },
      { path: 'column-hide-table', component: DocColumnHideTableComponent },
      { path: 'column-menu-table', component: DocColumnMenuTableComponent },

      { path: 'group-header-table', component: DocGroupHeaderTableComponent },
      { path: 'horizontal-scrollbar-table', component: DocHorizontalScrollbarTableComponent },

      { path: 'data-source-service-table', component: DocDataSourceServiceTableComponent },
      { path: 'table-view-summary', component: DocTableViewSummaryComponent },

      { path: 'column-sticky-table', component: DocColumnStickyTableComponent },

      { path: 'row-selection-table', component: DocRowSelectionTableComponent },
      { path: 'multi-row-selection-table', component: DocMultiRowSelectionTableComponent },

      { path: 'row-group-table', component: DocRowGroupTableComponent },
      { path: 'multi-row-group-table', component: DocMultiRowGroupTableComponent },
      { path: 'virtual-scroll-table', component: DocVirtualScrollTableComponent },



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocTableRoutingModule { }
