import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CryptoDialogComponent, Crypto } from '../../elements/dialogs/crypto-dialog/crypto-dialog.component';

@Component({
  selector: 'app-contact',
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

