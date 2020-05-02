import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocDashboardComponent {

  constructor(
  ) {
  }
}

