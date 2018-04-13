import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';

@Component({
	selector: 'insurance-page',
	templateUrl: 'insurance.html'
})
export class InsurancePage {
	
	constructor(public navCtrl: NavController, private auth: AuthService) {
	}

	goBack() {
		this.navCtrl.pop();
	}
}
