import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'fitbit-page',
	templateUrl: 'fitbit.html'
})
export class FitbitPage {
	
	constructor(public navCtrl: NavController) {
	}

	goBack() {
		this.navCtrl.pop();
	}
}
