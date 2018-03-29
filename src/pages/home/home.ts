import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Events, Tabs } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { ProfilePage } from '../profile/profile';
import { AuthService } from '../../providers/AuthProvider';
import { LoginPage } from '../login/login';
import { QrScanPage } from '../qr-home/qrScan';
import { QrCodePage } from '../qr-home/qrCode';
import { PrescriptionPage } from '../prescriptions/prescriptions';
import { RecordsPage } from '../records/records';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Tabs) tabs: Tabs;

	tab1: any;
	tab2: any;
	tab3: any;
	param: any;
	selectedTab: number;
	currentProfile: any;

	constructor(private nav: NavController, private menuCtrl: MenuController, private events: Events, private auth: AuthService) {
		this.tab1 = QrCodePage;
		this.tab2 = QrScanPage;
		this.tab3 = RecordsPage;
		this.selectedTab = 0;
		this.currentProfile = this.auth.getCurrentProfile();

		this.events.subscribe("change-tab", (tab, data) => {
			this.param = data;
			this.tabs.select(tab);
		});
	}

	ionViewDidEnter() {
		this.currentProfile = this.auth.getCurrentProfile();
	}

	ionViewDidLeave() {
		this.menuCtrl.close();
	}

	public goTo(page) {
		if (page === "profile") {
			this.nav.push(ProfilePage);
		} else if (page === "prescription") {
			this.nav.push(PrescriptionPage);
		}
	}

	public logout() {
		this.auth.logout().subscribe(() => {
			this.nav.setRoot(LoginPage);
		});
	}
}
