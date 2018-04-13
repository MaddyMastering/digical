import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthService, User } from '../../providers/AuthProvider';
import { LoginPage } from '../login/login';
import { QrScanPage } from '../scan/scan';
import { NotificationPage } from '../notifications/notifications';
import { ProfilePage } from '../profile/profile';

@Component({
	selector: 'page-home-doctor',
	templateUrl: 'home-doctor.html'
})
export class HomeDoctorPage {
	userData: User;
	qrData: string = null;

	constructor(private nav: NavController, private auth: AuthService) {
		this.userData = this.auth.getUserInfo();
		this.qrData = JSON.stringify(this.userData);
	}

	scan() {
		this.nav.push(QrScanPage);
	}

	public logout() {
		this.auth.logout().subscribe(() => {
			this.nav.setRoot(LoginPage);
		});
	}

	goTo(page) {
		if (page === "notifications") {
			this.nav.push(NotificationPage);
		} else if (page === "profiles") {
			this.nav.push(ProfilePage);
		}
	}
}
