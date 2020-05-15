import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'doc-layout-column',
  templateUrl: './layout-column.component.html',
  styleUrls: ['./layout-column.component.scss']
})
export class LayoutColumnComponent implements OnInit, OnDestroy {
  title = 'Grid Demo';

  constructor(
  ) {
  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

  onResizePanel(event) {
  }
}

