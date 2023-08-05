import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { UsersService } from '../users.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  datauser: any;
  constructor(
    private service: UsersService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController,
    private storage: Storage
  ) { }

  ngOnInit() {
    var result: any;

    this.storage.get('user').then((data) => {
     result = data;
     console.log(data);

    });
    console.log(result);
    this.service.display().subscribe((res) => {
      this.datauser = res;
    });

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'Your Cargo is Not Found Please Try After Some Time...!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
