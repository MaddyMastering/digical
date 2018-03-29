import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { AuthService } from '../../providers/AuthProvider';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-records',
    templateUrl: 'records.html'
})
export class RecordsPage {
    doctors: Array<string>;
    hospitals: Array<string>;

    constructor(public navCtrl: NavController, public events: Events, public auth: AuthService) {
        this.doctors = this.auth.getDoctors();
        this.hospitals = this.auth.getHospitals();
    }

    goTo(item) {
        this.events.publish("change-tab", 1, item);
    }
}
