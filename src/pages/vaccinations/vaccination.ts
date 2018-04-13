import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'vaccination-page',
	templateUrl: 'vaccination.html'
})
export class VaccinationPage {

	constructor(public navCtrl: NavController) {
	}

	goBack() {
		this.navCtrl.pop();
	}
}
