import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LastFmScrobblesComponent } from 'angular-last-fm-scrobbles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  lastFmKey : string; // YOU NEED TO GET THIS YOURSELF
  lastFmUser : string = 'jxnw'; // PROBABLY SHOULD USE YOUR OWN HERE
  @ViewChild(LastFmScrobblesComponent,{static: false}) scrobbler : LastFmScrobblesComponent;
  isCurrentlyPlayingMusic : boolean = false;

  constructor(private titleServ : Title) { 
    this.titleServ.setTitle('Jaxon Wright - About');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      if (this.lastFmKey) {
        this.scrobbler.isNowPlaying$.subscribe((val)=> {
          this.isCurrentlyPlayingMusic = val;
        });
      }
    },1000)
  }

  getTimeGreeting() : string {
    var myDate = new Date();
    var hrs = myDate.getHours();
    
    if (hrs < 12)
        return 'Good Morning';
    if (hrs >= 12 && hrs <= 17)
        return 'Good Afternoon';
    if (hrs >= 17 && hrs <= 24)
        return'Good Evening';
  }

  getAge() : number {
    const bday = new Date(1995,2,25);
    const timeDiff = Math.abs(Date.now() - bday.getTime())
    return Math.floor((timeDiff / (1000 * 3600 * 24))/365.25); 
  }


}
