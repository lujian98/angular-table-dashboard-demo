import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Demo';
  sidemenuRef: any;

  onActivate(componentRef) {
    this.sidemenuRef = componentRef;
  }

  onSideMenuNavIconClick($event) {
    if (this.sidemenuRef) {
      this.sidemenuRef.sideNavOpened = !this.sidemenuRef.sideNavOpened;
    }
  }
}

