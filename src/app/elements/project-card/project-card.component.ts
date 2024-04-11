import { Component, OnInit, computed, effect, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService, ThemeType } from '@services/theme/theme.service';
import { Project } from '@app/pages/projects/projects.component';



@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  project = input<Project>();
  imageSource = computed(() => {
    if (this.theme.themeType() == ThemeType.Light && this.project()?.logo) {
      return this.project().logo;
    } else if (this.project()?.logo) {
      return this.project().darkLogo;
    }
  });

  constructor(
    public router : Router,
    public theme : ThemeService) { 

  }

  ngOnInit() {
  }

}