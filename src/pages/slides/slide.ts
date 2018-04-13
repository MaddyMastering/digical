import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-slides',
    templateUrl: 'slide.html'
})
export class SlidesPage {
    constructor(public viewCtrl: ViewController) {
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
