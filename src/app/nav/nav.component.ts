import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'icc-demo-header-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  darkTheme = false;

  // @Output() sideMenuNavIconClickEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private readonly router: Router,
    public overlayContainer: OverlayContainer
  ) {
    this.overlayContainer.getContainerElement().classList.add('icc-theme-light');
  }

  changeTheme(event) {
    this.darkTheme = !this.darkTheme;
    document.querySelector('.app-theme').classList.remove('icc-theme-light');
    document.querySelector('.app-theme').classList.remove('icc-theme-dark');
    this.overlayContainer.getContainerElement().classList.remove('icc-theme-light');
    this.overlayContainer.getContainerElement().classList.remove('icc-theme-dark');
    if (!this.darkTheme) {
      document.querySelector('.app-theme').classList.add('icc-theme-light');
      this.overlayContainer.getContainerElement().classList.add('icc-theme-light');
    } else {
      document.querySelector('.app-theme').classList.add('icc-theme-dark');
      this.overlayContainer.getContainerElement().classList.add('icc-theme-dark');
    }
  }

  onLoggedout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['login']);
  }

  toggleSideMenuNav() {
    // this.sidemenunav.toggle();
    // this.sideMenuNavIconClickEvent.emit(true);
    /*
    setTimeout(() => {
      var resizeEvent = window.document.createEvent('UIEvents');
      resizeEvent.initUIEvent('resize', true, false, window, 0);
      window.dispatchEvent(resizeEvent);
    }, 250); */
  }
}