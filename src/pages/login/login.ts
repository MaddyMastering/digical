import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Loading, ToastController } from 'ionic-angular';
import { AuthService, Role, User } from '../../providers/AuthProvider';
import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { HomeDoctorPage } from '../home/homeDoctor';
import { DatabaseProvider } from '../../providers/DatabaseProvider';

@Component({
	selector: 'page-login',
	templateUrl: 'login.html'
})
export class LoginPage {
	loading: Loading;
	roles: Array<Role>;
	submitted = false;
	
	loginCredentials = { email: null, password: null };

	constructor(private nav: NavController, private auth: AuthService, private loadingCtrl: LoadingController, private db: DatabaseProvider, private toastCtrl: ToastController) {
		this.loading = this.loadingCtrl.create({ content: 'Please wait...', dismissOnPageChange: true });
		this.roles = this.auth.getRoles();
	}

	public createAccount() {
		this.nav.push(RegisterPage);
	}

	public login(email: string, password: string) {
		this.loading.present();

		this.auth.login(email, password).then((user: User) => {
			this.loading.dismiss();
			this.loading = this.loadingCtrl.create({ content: 'Please wait...', dismissOnPageChange: true });
			if (user.type === Role.USER) {
				this.nav.setRoot(HomePage);
			} else if (user.type === Role.DOCTOR) {
				this.nav.setRoot(HomeDoctorPage);
			}
		}).catch((err) => {
			this.loading.dismiss();
			this.loading = this.loadingCtrl.create({ content: 'Please wait...', dismissOnPageChange: true });
			this.showToast(err);
		});
	}

	submitForm() {
		this.login(this.loginCredentials.email, this.loginCredentials.password);
	}

	private showToast(text) {
		const toast = this.toastCtrl.create({
			message: text,
			showCloseButton: true,
			duration: 3000,
			closeButtonText: 'Ok'
		});

		toast.present();
	}
}
