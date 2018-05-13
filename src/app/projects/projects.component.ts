import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ThemeService } from '../_services/theme/theme.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleServ : Title, public theme : ThemeService) { 
    this.titleServ.setTitle('Jaxon Wright - Projects');
  }

  ngOnInit() {
  }

}
