import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  activity: {
    image: string,
    title: string,
    info: string
  };

  constructor(public navCtrl: NavController) {
    this.getActivity()
  }
  getActivity(): void {
    this.activity = {
      image: "http://lorempixel.com/400/300",
      title: "Bada i Havsbadet",
      info: "wrqprwqrhqwrhwqrhwqrpwq"
    }
  }
}
