import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddInvestPage } from '../pages/add-invest/add-invest';
import { UpdateInvestPage } from '../pages/update-invest/update-invest';
import { InfoInvestPage } from '../pages/info-invest/info-invest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddInvestPage,
    UpdateInvestPage,
    InfoInvestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddInvestPage,
    UpdateInvestPage,
    InfoInvestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
