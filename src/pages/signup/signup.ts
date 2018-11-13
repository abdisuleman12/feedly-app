import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// @IonicPage() only needed if you have a sign up module page
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
