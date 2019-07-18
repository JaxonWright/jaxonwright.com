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
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CryptoDialogComponent } from './crypto-dialog/crypto-dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ThemeService } from './_services/theme/theme.service';
import { BuildInfoComponent } from './build-info/build-info.component';
import { IconsModule } from './icons.module';
import { RoutesModule } from '../routes.module';




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
    StatsComponent,
    CryptoDialogComponent,
    BuildInfoComponent
  ],
  entryComponents: [CryptoDialogComponent],
  imports: [
    FontAwesomeModule,
    IconsModule,
    RoutesModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatDividerModule,
    MatChipsModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
    MatListModule,
    OverlayModule,
  ],
  providers: [
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
