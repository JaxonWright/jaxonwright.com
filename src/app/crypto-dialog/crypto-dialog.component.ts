import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export const Crypto = { 
  BTC_WALLET: "3HRe3gyG6qr1JRcesnsfEGYhhD1N377WdD",
  BCH_WALLET: "qpjyylenmrwuz7nzgz75nua98lzhn0aynuk0q5gw7s",
  ETH_WALLET: "0xC1706CA11e6C9ed781d65371A7d71B0c02227860",
}

@Component({
  selector: 'app-crypto-dialog',
  templateUrl: './crypto-dialog.component.html',
  styleUrls: ['./crypto-dialog.component.css']
})
export class CryptoDialogComponent implements OnInit {
  public walletID : string;
  readonly Crypto = Crypto;

  constructor(
    public dialogRef: MatDialogRef<CryptoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbar : MatSnackBar) { 
      this.walletID = data.walletID;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  copyWalletID(element) {
    element.select();
    document.execCommand('copy');
    element.setSelectionRange(0, 0);
    this.snackbar.open('Wallet Address Copied to Clipboard','', {
      duration: 2000
    });
  }
}

