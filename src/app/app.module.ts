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
import {MatMenuModule} from '@angular/material/menu';
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
