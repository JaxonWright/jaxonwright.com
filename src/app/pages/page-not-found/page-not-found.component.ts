import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-page-not-found',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './page-not-found.component.html',
    styleUrls: ['./page-not-found.component.css'],
    imports: [FaIconComponent]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
