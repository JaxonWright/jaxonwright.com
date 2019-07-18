import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ProjectsComponent } from './app/projects/projects.component';
import { BuildInfoComponent } from './app/build-info/build-info.component';
import { PlexComponent } from './app/plex/plex.component';
import { RequestsComponent } from './app/plex/requests/requests.component';
import { StatsComponent } from './app/plex/stats/stats.component';
import { ContactComponent } from './app/contact/contact.component';
import { PageNotFoundComponent } from './app/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'build-info', component: BuildInfoComponent },
    { path: 'plex', component: PlexComponent },
    { path: 'plex/requests', component: RequestsComponent },
    { path: 'plex/request', component: RequestsComponent },
    { path: 'plex/stats', component: StatsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PageNotFoundComponent }
  ]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes, { enableTracing: false }),
      CommonModule
    ],
    exports: [RouterModule]
  })
  export class RoutesModule { }