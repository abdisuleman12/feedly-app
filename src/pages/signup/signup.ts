import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import firebase from 'firebase';
import { FeedPage } from '../feed/feed';


// @IonicPage() only needed if you have a sign up module page
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name: string = ""; 
  email: string = "";
  password: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertsCtrl: AlertController
    ) {
  }

  signUp(){
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
    .then((data) => {

      console.log(data)
      
      let newUser: firebase.User = data.user
      newUser.updateProfile({
        displayName: this.name,
        photoURL: ""
      }).then(() => {
        console.log("Profile Updated")

        this.alertsCtrl.create({
          title: "Account Created",
          message: "Your account has been created successfully",
          buttons: [
            {
              text: "Ok",
              // handler is a function that runs on button click
              handler: () => {
                // navigate to the feeds page
                this.navCtrl.setRoot(FeedPage)
              }
            }
          ]
        }).present();

      }).catch((err) => {
        console.log(err)
      })
    }).catch((err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000
      }).present();
    })
  }

  goBack(){
    this.navCtrl.pop();
  }

}
