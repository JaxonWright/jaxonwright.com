import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '@app/app.component';
import { ThemeService, ThemeType } from '@services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  preventSingle : boolean = false;
  timer;
  ThemeType = ThemeType;
  
  constructor(public router : Router, public app : AppComponent, public theme : ThemeService) { }

  ngOnInit() {
  }

  setTheme(theme : ThemeType) {

    if (theme != ThemeType.Black) {
      this.timer = setTimeout(()=> {
        if (!this.preventSingle) this.app.setTheme(theme);
        else this.preventSingle = false;
      },200)
    } else {
      this.preventSingle = true;
      clearTimeout(this.timer);
      this.app.setTheme(theme);
    }
  }

}
