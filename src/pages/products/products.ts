import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';
import { PrescriptionPage } from '../prescriptions/prescriptions';
import { VaccinationPage } from '../vaccinations/vaccination';
import { DiagnosticsPage } from '../diagnostics/diagnostics';
import { InsurancePage } from '../insurance/insurance';
import { FitbitPage } from '../fitbit/fitbit';

@Component({
    selector: 'page-products',
    templateUrl: 'products.html'
})
export class ProductPage {
    constructor(public nav: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    goBack() {
        this.nav.pop();
    }

    goTo(page) {
		if (page === "profile") {
			this.nav.push(ProfilePage);
		} else if (page === "prescription") {
			this.nav.push(PrescriptionPage);
		} else if (page === "vaccination") {
			this.nav.push(VaccinationPage);
		} else if (page === "diagnostics") {
			this.nav.push(DiagnosticsPage);
		} else if (page === "insurance") {
			this.nav.push(InsurancePage);
		} else if (page === "fitbit") {
			this.nav.push(FitbitPage);
		}
	}
}
