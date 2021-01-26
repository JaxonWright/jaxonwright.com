import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { BuildInfoComponent } from '@pages/build-info/build-info.component';
import { PlexComponent } from '@pages/plex/plex.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'build-info', component: BuildInfoComponent },
    { path: 'plex', component: PlexComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: PageNotFoundComponent }
  ]

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes, { enableTracing: false, relativeLinkResolution: 'legacy' }),
      CommonModule
    ],
    exports: [RouterModule]
  })
  export class RoutesModule { }