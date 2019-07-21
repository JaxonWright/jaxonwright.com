import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentYear : number;
  constructor(public theme : ThemeService) { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
