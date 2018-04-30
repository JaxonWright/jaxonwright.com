import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private titleServ : Title) { 
    this.titleServ.setTitle('Jaxon Wright - Projects');
  }

  ngOnInit() {
  }

}
