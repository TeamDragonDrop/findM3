import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private payload = {
    trapped: null,
    injured: null,
    pong: null,
    walk: null,
    people: null,
    alone: null

  };

  constructor(public alertCtrl: AlertController, private ble: BLE, public navCtrl: NavController) {

      ble
      .isEnabled()
      .catch(()=>{
         alert('Bluetooth not enabled');
      })
      .then(()=>{
         alert('Bluetooth ENABLED! WOO HOO!!!');
      });

      this.alertCtrl.create({
          message: 'Are you trapped?',
          buttons: [
              {
                  text: 'Yes',
                  handler: () => {
                      this.payload.trapped = true;
                      injuredPrompt.present();
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      this.payload.trapped = false;
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
                      this.payload.injured = true;
                      pongPrompt.present();
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      this.payload.injured = false;
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
                      this.payload.pong = true;
                      alonePrompt.present();
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      this.payload.pong = false;
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
                      this.payload.alone = true;
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      this.payload.alone = false;
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
                  handler: (data) => {
                      this.payload.people = data.people;
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
                      this.payload.walk = true;
//                      injuredPrompt.present();
                  }
              },
              {
                  text: 'No',
                  handler: () => {
                      this.payload.walk = false;
//                      injuredPrompt.present();
                  }
              }
          ]
      });


  }

}
