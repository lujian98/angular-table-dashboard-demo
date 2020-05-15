import { Component, OnInit } from '@angular/core';
import { DocpopoverDemoComponent } from './popover-demo/popover-demo.component';

@Component({
  selector: 'doc-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class DocPopoverComponent implements OnInit {
  texttooltip = 'This is a text tooltip.';
  popover = DocpopoverDemoComponent;
  popoverdata = {
    skills: [1, 2, 3, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  };

  ngOnInit() { }
}

