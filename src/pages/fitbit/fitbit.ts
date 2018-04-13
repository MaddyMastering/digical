import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';

@Component({
	selector: 'fitbit-page',
	templateUrl: 'fitbit.html'
})
export class FitbitPage {
	
	constructor(public navCtrl: NavController, private auth: AuthService) {
	}

	goBack() {
		this.navCtrl.pop();
	}
}
