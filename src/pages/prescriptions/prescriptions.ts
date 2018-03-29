import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';

@Component({
	selector: 'page-prescription',
	templateUrl: 'prescriptions.html'
})
export class PrescriptionPage {
	shownGroup = null;
	prescriptions: Array<any>;

	constructor(public navCtrl: NavController, public auth: AuthService) {
		this.prescriptions = this.auth.getPrescriptions();
	}

	toggleGroup(group) {
		if (this.isGroupShown(group)) {
			this.shownGroup = null;
		} else {
			this.shownGroup = group;
		}
	}

	isGroupShown(group) {
		return this.shownGroup === group;
	}
}
