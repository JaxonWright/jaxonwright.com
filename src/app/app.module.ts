import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppsComponent } from './apps/apps.component';
import { ProjectsComponent } from './projects/projects.component';
import { UltronComponent } from './ultron/ultron.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PlexComponent } from './plex/plex.component';
import { RequestsComponent } from './plex/requests/requests.component';
import { StatsComponent } from './plex/stats/stats.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'apps', component: AppsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'plex', component: PlexComponent },
  { path: 'plex/requests', component: RequestsComponent },
  { path: 'plex/request', component: RequestsComponent },
  { path: 'plex/stats', component: StatsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppsComponent,
    ProjectsComponent,
    UltronComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    PlexComponent,
    RequestsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
