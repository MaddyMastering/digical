import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-description',
    templateUrl: 'description.html'
})
export class DescriptionPage {
    title: string;
    name: string;

    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
        this.title = this.navParams.get("title");
        this.name = this.navParams.get("name");
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
