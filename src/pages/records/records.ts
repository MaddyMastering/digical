import { Component } from '@angular/core';
import { NavController, Events, ModalController } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';
import { DescriptionPage } from '../description/description';
import { QrScanPage } from '../scan/scan';

@Component({
    selector: 'page-records',
    templateUrl: 'records.html'
})
export class RecordsPage {
    doctors: Array<string>;
    hospitals: Array<string>;

    constructor(public navCtrl: NavController, public events: Events, public modalCtrl: ModalController, public auth: AuthService) {
        this.doctors = this.auth.getDoctors();
        this.hospitals = this.auth.getHospitals();
    }

    goTo(item) {
        let modal = this.modalCtrl.create(QrScanPage, { data: item });
        modal.present();    
    }

    showDescription(name, title) {
        let modal = this.modalCtrl.create(DescriptionPage, { title: title, name: name });
        modal.present();
    }
}   
