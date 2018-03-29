import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService, Role } from '../../providers/AuthProvider';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    createSuccess = false;
    roles: Array<Role>;
    registerCredentials = { email: '', password: '', type: '' };

    constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController) {
        this.roles = this.auth.getRoles();
    }

    public register() {
        this.auth.register(this.registerCredentials).subscribe((success) => {
            this.showPopup("Success", "Account created.");
        }, (error) => {
            this.showPopup("Error", "Please try again.");
        });
    }

    showPopup(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: data => {
                        if (this.createSuccess) {
                            this.nav.popToRoot();
                        }
                    }
                }
            ]
        });

        alert.present();
    }
}