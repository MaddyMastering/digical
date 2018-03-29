import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { AuthService, Role, User } from '../../providers/AuthProvider';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	loading: Loading;
	roles: Array<Role>;
	registerCredentials = { email: 'mad@digical.com', password: 'mad@123', type: Role.USER };

	constructor(private nav: NavController, private auth: AuthService, private loadingCtrl: LoadingController) {
		this.loading = this.loadingCtrl.create({ content: 'Please wait...', dismissOnPageChange: true });
		this.roles = this.auth.getRoles();
	}

	public createAccount() {
		this.nav.push(RegisterPage);
	}

	public login(registerCredentials: User) {
		this.loading.present();
		this.auth.login(this.registerCredentials).subscribe(allowed => {
			this.loading.dismiss();
			this.nav.setRoot(HomePage);
		});
	}
}
