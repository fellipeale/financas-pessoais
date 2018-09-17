import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddInvestPage } from '../add-invest/add-invest';
import { UpdateInvestPage } from '../update-invest/update-invest';
import { InfoInvestPage } from '../info-invest/info-invest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addInvestPage = AddInvestPage;
  updateInvestPage = UpdateInvestPage;
  infoInvestPage = InfoInvestPage;

  constructor(public navCtrl: NavController) {

  }

}
