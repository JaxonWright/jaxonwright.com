import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private titleServ : Title) { 
    this.titleServ.setTitle('Ultron Plex Stats');
  }

  ngOnInit() {
  }

}
