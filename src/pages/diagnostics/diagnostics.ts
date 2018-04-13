import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SlidesPage } from '../slides/slide';

@Component({
	selector: 'diagnostics-page',
	templateUrl: 'diagnostics.html'
})
export class DiagnosticsPage {

	constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
	}

	goBack() {
		this.navCtrl.pop();
	}

	details() {
		let modal = this.modalCtrl.create(SlidesPage, {});
		modal.present();
	}
}
