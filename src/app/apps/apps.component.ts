import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  

  constructor(private titleServ : Title) { 
    this.titleServ.setTitle('Jaxon Wright - Apps');
  }

  ngOnInit() {
  }

}
