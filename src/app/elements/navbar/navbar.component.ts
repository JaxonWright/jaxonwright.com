import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { ThemeService, ThemeType } from '@services/theme/theme.service';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatAnchor, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatMenuTrigger, MatMenu, MatMenuItem } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    imports: [MatToolbar, MatToolbarRow, MatAnchor, RouterLink, MatIconAnchor, MatTooltip, FaIconComponent, MatIconButton, MatMenuTrigger, NgIf, MatIcon, MatMenu, MatMenuItem, RouterLinkActive]
})
export class NavbarComponent {
  ThemeType = ThemeType;
  
  constructor(
    public router: Router,
    public app: AppComponent,
    public theme: ThemeService
  ) { }

}
