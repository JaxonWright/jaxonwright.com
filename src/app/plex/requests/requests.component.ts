import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private titleServ : Title) {
    this.titleServ.setTitle('Ultron Plex Requests');
   }

  ngOnInit() {
  }

}
