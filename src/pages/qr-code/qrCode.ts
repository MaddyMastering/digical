import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService, User } from '../../providers/AuthProvider';
import { ProductPage } from '../products/products';

@Component({
	selector: 'qr-code',
	templateUrl: 'qr-code.html'
})
export class QrCodePage {
	userData: User;
	qrData: string = null;

	constructor(public navCtrl: NavController, public auth: AuthService) {
		this.userData = this.auth.getUserInfo();
		this.qrData = JSON.stringify(this.userData);
	}

	public goTo(page) {
		if (page === "products") {
			this.navCtrl.push(ProductPage);
		}
	}
}
