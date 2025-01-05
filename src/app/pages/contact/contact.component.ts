import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatFabButton, MatFabAnchor } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
    selector: 'app-contact',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    imports: [MatFabButton, MatTooltip, FaIconComponent, MatFabAnchor]
})
export class ContactComponent implements OnInit {

  constructor(private titleServ : Title) { 
    this.titleServ.setTitle('Jaxon Wright - Contact');
  }

  ngOnInit() {
  }

}

