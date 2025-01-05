import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone: false
})
export class ContactComponent implements OnInit {

  constructor(private titleServ : Title) { 
    this.titleServ.setTitle('Jaxon Wright - Contact');
  }

  ngOnInit() {
  }

}

