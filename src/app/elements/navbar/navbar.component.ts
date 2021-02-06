import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { ThemeService, ThemeType } from '@services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  ThemeType = ThemeType;
  
  constructor(
    public router: Router,
    public app: AppComponent,
    public theme: ThemeService
  ) { }

}
