import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

      this.alertCtrl.create({
          message: 'Are you trapped?',
          buttons: [
              {
                  text: 'Yes',
                  handler: () => {
                      injuredPrompt.present();
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      injuredPrompt.present();
                  }
              }
          ]
      }).present();

      let injuredPrompt = this.alertCtrl.create({
          message: 'Are you injured?',
          buttons: [
              {
                  text: 'Yes',
                  handler: () => {
                      pongPrompt.present();
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      pongPrompt.present();
                  }
              }
          ]
      });

      let pongPrompt = this.alertCtrl.create({
          message: 'Can we alert first responders to your location?',
          buttons: [
              {
                  text: 'Yes',
                  handler: () => {
                      alonePrompt.present();
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      alonePrompt.present();
                  }
              }
          ]
      });

      let alonePrompt = this.alertCtrl.create({
          message: 'Are you alone?',
          buttons: [
              {
                  text: 'Yes',
                  handler: () => {
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      partyPrompt.present();
                  }
              }
          ]
      });

      let partyPrompt = this.alertCtrl.create({
          message: 'How many in your party?',
          inputs: [
              {
                  name: 'people',
                  placeholder: 'People'
              },
          ],
          buttons: [
              {
                  text: 'Ok',
                  handler: () => {
                      walkPrompt.present();
                  }
              }
          ]
      });

      let walkPrompt = this.alertCtrl.create({
          message: 'Can you walk?',
          buttons: [
              {
                  text: 'Yes',
                  handler: () => {
//                      injuredPrompt.present();
                  }
              },
              {
                  text: 'No',
                  handler: () => {
//                      injuredPrompt.present();
                  }
              }
          ]
      });


  }

}
