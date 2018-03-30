import { Component } from '@angular/core';
import { Events } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AuthService } from '../../providers/AuthProvider';

@Component({
	selector: 'qr-scan',
	templateUrl: 'qr-scan.html'
})
export class QrScanPage {
	selectedRole: any;
    roles: Array<string>;
	scannedData: any;

	constructor(public auth: AuthService,public barcodeScanner: BarcodeScanner, public events: Events) {
		this.roles = this.auth.getRoles();
		this.selectedRole = this.roles[0];
		
		this.events.subscribe("change-tab", (tab, data) => {
			this.selectedRole = data;
		});
	}

	scan() {
		this.barcodeScanner.scan().then(barcodeData => {
			this.scannedData = { name: barcodeData.text, role: this.selectedRole };
		});
	}
}
