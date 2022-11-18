import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { CryptoDialogComponent, Crypto } from '../../elements/dialogs/crypto-dialog/crypto-dialog.component';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  readonly Crypto = Crypto;

  constructor(private titleServ : Title, public dialog: MatDialog) { 
    this.titleServ.setTitle('Jaxon Wright - Contact');
  }

  ngOnInit() {
  }

  openDialog(walletID : string) {
    let dialogRef = this.dialog.open(CryptoDialogComponent, {
      width: '500px',
      height: '506px',
      data: { walletID }
    });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

}

