import { Component, OnInit, computed, effect, input, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService, ThemeType } from '@services/theme/theme.service';
import { Project } from '@app/pages/projects/projects.component';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { NgIf, NgFor } from '@angular/common';
import { MatChipListbox, MatChip } from '@angular/material/chips';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { MatAnchor } from '@angular/material/button';



@Component({
    selector: 'app-project-card',
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css'],
    imports: [MatCard, MatCardHeader, MatCardTitle, NgIf, MatCardSubtitle, MatChipListbox, NgFor, MatChip, FaIconComponent, MatCardContent, MatCardActions, MatAnchor]
})
export class ProjectCardComponent implements OnInit {
  project = input<Project>();
  imageSource = computed(() => {
    if (this.theme.themeType() == ThemeType.Light && this.project()?.logo) {
      return this.project().logo;
    } else if (this.project()?.darkLogo) {
      return this.project().darkLogo;
    } else {
      return this.project().logo ?? '';
    }
  });

  constructor(
    public router : Router,
    public theme : ThemeService) { 

  }

  ngOnInit() {
  }

}