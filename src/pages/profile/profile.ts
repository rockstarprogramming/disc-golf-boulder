import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  gender: string = "m";
location: string = "boulder";
skillLevel: { title: string, subTitle: string};

  constructor(public navCtrl: NavController) {
    this.skillLevel = {
    title: 'Skill Level',
    subTitle: 'Select your level'
    };
  }

  skillSelect() {
  console.log('Skill Selected');
  }
}
