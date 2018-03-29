import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
	selector: 'qr-scan',
	templateUrl: 'qr-scan.html'
})
export class QrScanPage {
	scanFor: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
		this.events.subscribe("change-tab", (tab, data) => {
			this.scanFor = data;
			console.log(data);		
		});
	}
}
