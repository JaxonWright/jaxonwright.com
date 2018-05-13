import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './_services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @HostBinding('class') componentCssClass;

  constructor(public overlayContainer : OverlayContainer, public theme : ThemeService){}

  ngOnInit() {
    this.setTheme(this.theme.getSaved());
  }

  setTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    this.theme.set(theme);
  }

}
