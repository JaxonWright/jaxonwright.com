import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ThemeService } from '../_services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(public router : Router, public app : AppComponent, public theme : ThemeService) { }

  ngOnInit() {
  }

  setTheme(theme) {
    this.app.setTheme(theme);
  }

}
