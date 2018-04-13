import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Events, Tabs } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { AuthService, Role, User } from '../../providers/AuthProvider';
import { LoginPage } from '../login/login';
import { QrCodePage } from '../qr-code/qrCode';
import { PrescriptionPage } from '../prescriptions/prescriptions';
import { RecordsPage } from '../records/records';
import { VaccinationPage } from '../vaccinations/vaccination';
import { DiagnosticsPage } from '../diagnostics/diagnostics';
import { InsurancePage } from '../insurance/insurance';
import { FitbitPage } from '../fitbit/fitbit';
import { DatabaseProvider } from '../../providers/DatabaseProvider';
import { ProductPage } from '../products/products';
import { NotificationPage } from '../notifications/notifications';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	userData: User;
	qrData: string = null;

	constructor(private nav: NavController, private events: Events, private auth: AuthService, private db: DatabaseProvider) {
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
