import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';

@Component({
	selector: 'vaccination-page',
	templateUrl: 'vaccination.html'
})
export class VaccinationPage {
	
	constructor(public navCtrl: NavController, private auth: AuthService) {
	}

	goBack() {
		this.navCtrl.pop();
	}
}
