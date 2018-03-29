import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
	selector: 'qr-scan',
	templateUrl: 'qr-scan.html'
})
export class QrScanPage {
	scanFor: string;
	scannedData: any;

	constructor(public barcodeScanner: BarcodeScanner, public events: Events) {
		this.events.subscribe("change-tab", (tab, data) => {
			this.scanFor = data;
		});
	}

	scan() {
		this.barcodeScanner.scan().then(barcodeData => {
			this.scannedData = { name: barcodeData.text, type: this.scanFor };
		});
	}
}
