import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';

@Component({
	selector: 'qr-code',
	templateUrl: 'qr-code.html'
})
export class QrCodePage {
	url: string = null;

	constructor(public navCtrl: NavController, public auth: AuthService) {
		let profile_data = this.auth.getCurrentProfile();
		this.url = profile_data.name;
	}
}
