import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddActivityPage} from '../add-activity/add-activity';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  activity: {
    image: string,
    title: string,
    info: string,
    distance: number
  };

  constructor(public navCtrl: NavController,private storage: Storage) {
  }

  ionViewWillEnter(){

    this.getActivity();

  }

  getActivity(): void {
    this.storage.get('activities').then((tempArray) => {      
      this.activity = tempArray[tempArray.length-1];
    }).catch(function(error){
      console.log(error);
    });
  }
  createActivity(): void{
    this.navCtrl.push(AddActivityPage);
  }
}
