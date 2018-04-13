import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';
import { LoginPage } from '../login/login';

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {
	currentProfile: any;
	profiles: Array<any>;

	constructor(public navCtrl: NavController, private auth: AuthService) {
		this.currentProfile = this.auth.getCurrentProfile();
		this.profiles = this.auth.getProfiles();
	}

	goBack() {
		this.navCtrl.pop();
	}

	updateProfile(profile: any) {
		this.currentProfile = profile;
		this.auth.setCurrentProfile(profile);
	}

	public logout() {
		this.auth.logout().subscribe(() => {
			this.navCtrl.setRoot(LoginPage);
		});
	}
}
