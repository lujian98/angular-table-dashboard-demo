import { Component, OnInit } from '@angular/core';
import { IccOverlayComponentRef } from 'icc9';

@Component({
  templateUrl: './popover-demo.component.html',
  styleUrls: ['./popover-demo.component.scss']
})
export class DocpopoverDemoComponent implements OnInit {
  skills = [];
  constructor(
    private overlayComponentRef: IccOverlayComponentRef<any>
  ) { }

  ngOnInit() { }

  close() {
    this.overlayComponentRef.close({ id: 1 });
      // TODO this may not be enough to close tooltip need add close events subject to popover directive
  }
}
