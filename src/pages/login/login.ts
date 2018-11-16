import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

import firebase from 'firebase';
import { FeedPage } from '../feed/feed';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  email: string = "";
  password: string = ""

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then((user) => {

      this.toastCtrl.create({
        message: "Welcome " + user.user.displayName,
        duration: 3000
      }).present();

      //setRoot function resets the navigation stack and
      //does not allow the user to navigate back to the previous page
      this.navCtrl.setRoot(FeedPage)
      
    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).present();
    })
  }

  gotoSignup() {
    this.navCtrl.push(SignupPage);
  }



}
