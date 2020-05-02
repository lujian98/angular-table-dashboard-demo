import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'icc-doc-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class DocTableComponent implements OnInit, OnDestroy {
  title = 'Grid Demo';
  isVisible = true;
  queryParams: any;

  private readonly subMedia: Subscription;
  media$: MediaChange;

  sideNavOpened = true;
  sideNavMode: 'side' | 'over' = 'side';
  toolBarHeight = 64;

  constructor(
    media: MediaObserver,
    // private router: Router,
  ) {
    this.subMedia = media.media$.subscribe((change: MediaChange) => {
      this.media$ = change;
      this.setMediaChange(change);
    });
  }

  ngOnInit() {
  }

  private setMediaChange(change: MediaChange) {
    if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
      if (this.sideNavOpened) {
        this.sideNavOpened = false;
      }
      this.sideNavMode = 'over';
    } else {
      this.sideNavOpened = true;
      this.sideNavMode = 'side';
    }
    if (change.mqAlias === 'xs') {
      this.toolBarHeight = 56;
    } else {
      this.toolBarHeight = 64;
    }
  }

  ngOnDestroy() {
    this.subMedia.unsubscribe();
  }
}

