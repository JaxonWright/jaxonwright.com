import { Component, OnInit, Inject } from '@angular/core';
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';

export const Crypto = { 
  BTC_WALLET: "3P3V3taqLZeubAQNbsf9p99qxgNTSMQoGm",
  ETH_WALLET: "0xea40f7f9e7f35c870c3149e142e0dac032be9843",
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

