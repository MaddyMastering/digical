import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { AuthService, Role, User } from '../../providers/AuthProvider';
import { DatabaseProvider } from '../../providers/DatabaseProvider';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    createSuccess = false;
    roles: Array<Role>;
    registerCredentials = { name: "", email: "", password: "", type: Role.USER };

    constructor(private nav: NavController, private auth: AuthService, private db: DatabaseProvider, private toastCtrl: ToastController) {
        this.roles = this.auth.getRoles();
    }

    public register(registerCredentials: any) {
        let user = new User(registerCredentials.name, registerCredentials.email, registerCredentials.password, registerCredentials.type);

        this.db.registerUser(user).then((data) => {
            this.registerCredentials = { name: "", email: "", password: "", type: Role.USER };
            this.showToast("Account created.");
        }).catch((err) => {
            this.showToast("Please try again later.");
        });
    }

    private showToast(text) {
        const toast = this.toastCtrl.create({
            message: text,
            showCloseButton: true,
            closeButtonText: 'Ok'
        });

        toast.present();
    }

    submitForm() {
        this.register(this.registerCredentials);
    }
}