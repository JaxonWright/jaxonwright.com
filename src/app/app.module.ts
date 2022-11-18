import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from '@pages/home/home.component';
import { ProjectsComponent } from '@pages/projects/projects.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { NavbarComponent } from '@elements/navbar/navbar.component';
import { FooterComponent } from '@elements/footer/footer.component';
import { ContactComponent } from '@pages/contact/contact.component';
import { PlexComponent } from '@pages/plex/plex.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatDividerModule} from '@angular/material/divider';
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips';
import {MatLegacyDialogModule as MatDialogModule} from '@angular/material/legacy-dialog';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {MatIconModule} from '@angular/material/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CryptoDialogComponent } from '@dialogs/crypto-dialog/crypto-dialog.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ThemeService } from '@services/theme/theme.service';
import { BuildInfoComponent } from '@pages/build-info/build-info.component';
import { IconsModule } from './icons.module';
import { RoutesModule } from './routes.module';
import { ProjectCardComponent } from './elements/project-card/project-card.component';
import { QRCodeModule } from 'angularx-qrcode';




@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ProjectsComponent,
        PageNotFoundComponent,
        NavbarComponent,
        FooterComponent,
        ContactComponent,
        PlexComponent,
        CryptoDialogComponent,
        BuildInfoComponent,
        ProjectCardComponent,
    ],
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
        MatMenuModule,
        MatIconModule,
        QRCodeModule,
    ],
    providers: [
        ThemeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
