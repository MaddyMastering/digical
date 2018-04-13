import { Component } from '@angular/core';
import { ToastController, NavParams, ViewController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AuthService, User, Role } from '../../providers/AuthProvider';

@Component({
	selector: 'qr-scan',
	templateUrl: 'scan.html'
})
export class QrScanPage {
	selectedRole: any;
	roles: Array<string>;
	scannedData: any = { name: null, role: null, scanned: false };

	constructor(public auth: AuthService, public barcodeScanner: BarcodeScanner, public navParams: NavParams, public viewCtrl: ViewController, public toastCtrl: ToastController) {
		this.roles = this.auth.getRoles();
		this.selectedRole = this.navParams.get("data") ? this.navParams.get("data") : this.roles[0];
	}

	dismiss() {
		this.viewCtrl.dismiss();
	}

	scan() {
		this.barcodeScanner.scan().then(barcodeData => {
			let scannedUser: User = JSON.parse(barcodeData.text);
			this.scannedData = { name: scannedUser.name, email: scannedUser.email, imageUrl: scannedUser.imageUrl, role: scannedUser.type, scanned: true };
		});
	}

	save() {
		const toast = this.toastCtrl.create({
			message: 'Added Successfully',
			showCloseButton: true,
			closeButtonText: 'Ok'
		});
		toast.present();

		this.scannedData = { name: "text", role: this.selectedRole, scanned: false };
	}
}
