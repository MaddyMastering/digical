import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-slides',
    templateUrl: 'slide.html'
})
export class SlidesPage {
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
