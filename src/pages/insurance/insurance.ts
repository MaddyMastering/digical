import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'insurance-page',
	templateUrl: 'insurance.html'
})
export class InsurancePage {
	
	constructor(public navCtrl: NavController) {
	}

	goBack() {
		this.navCtrl.pop();
	}
}
