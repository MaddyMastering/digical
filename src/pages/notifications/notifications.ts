import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';
import { DescriptionPage } from '../description/description';

@Component({
    selector: 'page-notifications',
    templateUrl: 'notifications.html'
})
export class NotificationPage {
    notifications: Array<any>;

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
        this.notifications = [
            { message: "one", read: false },
            { message: "two", read: false },
            { message: "three", read: false },
            { message: "four", read: false },
            { message: "five", read: false }
        ];
    }

    goBack() {
        this.navCtrl.pop();
    }

    read(index: number) {
        let modal = this.modalCtrl.create(DescriptionPage, { title: "Message", name: "Notification " + index });
        this.notifications[index].read = true;
        modal.present();
    }

    delete(item: any) {
        let index = this.notifications.indexOf(item);
        this.notifications.splice(index, 1);
    }
}
