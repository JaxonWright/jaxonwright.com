import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-plex',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plex.component.html',
  styleUrls: ['./plex.component.css']
})
export class PlexComponent implements OnInit {

  constructor(private titleServ : Title) { 
    this.titleServ.setTitle('Jaxon Wright - Plex');
  }

  ngOnInit() {
  }

}
