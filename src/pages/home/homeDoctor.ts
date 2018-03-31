import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, Events, Tabs } from 'ionic-angular';

import { AuthService } from '../../providers/AuthProvider';
import { LoginPage } from '../login/login';
import { QrScanPage } from '../qr-home/qrScan';
import { QrCodePage } from '../qr-home/qrCode';

@Component({
	selector: 'page-home-doctor',
	templateUrl: 'home-doctor.html'
})
export class HomeDoctorPage {
	@ViewChild(Tabs) tabs: Tabs;

	tab1: any;
	tab2: any;
	param: any;
	selectedTab: number;
	currentProfile: any;

	constructor(private nav: NavController, private menuCtrl: MenuController, private events: Events, private auth: AuthService) {
		this.tab1 = QrCodePage;
		this.tab2 = QrScanPage;
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
	}

	public logout() {
		this.auth.logout().subscribe(() => {
			this.menuCtrl.enable(false)
			this.nav.setRoot(LoginPage);
		});
	}
}
