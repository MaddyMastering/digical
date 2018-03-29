import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRCode, ErrorCorrectLevel, QRNumber, QRAlphaNum, QR8BitByte, QRKanji } from 'qrcode-generator-ts/js';
import { AuthService } from '../../providers/AuthProvider';

@Component({
	selector: 'qr-code',
	templateUrl: 'qr-code.html'
})
export class QrCodePage {
	qr: QRCode;
	url: string;

	constructor(public navCtrl: NavController, public auth: AuthService) {
		let profile_data = this.auth.getCurrentProfile();
		
		this.qr = new QRCode();
		this.qr.addData(profile_data.name);
		this.qr.make();
		this.url = this.qr.toDataURL();
	}
}
