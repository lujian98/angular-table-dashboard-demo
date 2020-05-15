import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'icc-doc-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class DocTreeComponent implements OnInit, OnDestroy {
  title = 'Tree Demo';

  constructor() { }

  ngOnInit() { }


  ngOnDestroy() { }
}

