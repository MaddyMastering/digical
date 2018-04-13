import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { AuthService, User } from '../../providers/AuthProvider';
import { RecordsPage } from '../records/records';
import { ProductPage } from '../products/products';
import { NotificationPage } from '../notifications/notifications';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	userData: User;
	qrData: string = null;

	constructor(private nav: NavController, private auth: AuthService) {
		this.userData = this.auth.getUserInfo();
		this.qrData = JSON.stringify(this.userData);
	}

	goTo(page) {
		if (page === "notifications") {
			this.nav.push(NotificationPage);
		} else if (page === "profiles") {
			this.nav.push(ProfilePage);
		} else if (page === "products") {
			this.nav.push(ProductPage);
		} else if (page === "records") {
			this.nav.push(RecordsPage);
		}
	}
}
