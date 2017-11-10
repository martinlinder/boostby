import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the AddActivityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-activity',
  templateUrl: 'add-activity.html',
})
export class AddActivityPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private storage: Storage) {
  }

  activity: {
    image: string,
    title: string,
    info: string,
    distance: number
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddActivityPage');
  }


  save(title, info) {

    this.activity = {
      image: "http://lorempixel.com/400/300",
      title: title,
      info: info,
      distance: 5
    }

    this.storage.get('activities').then((tempArray) => {
      if (tempArray != null) {
        tempArray.push(this.activity);
        console.log(tempArray);
        this.storage.set('activities', tempArray); 
        this.showAlert();
      } else {
        let activityArray = [];

        activityArray.push(this.activity); 
        this.storage.set('activities', activityArray);
        this.showAlert();
      }

    }).catch(function (error) {

    });






    this.navCtrl.pop();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Activity created!',
      subTitle: '',
      buttons: ['OK']
    }); 
    
    alert.present();
  }
}