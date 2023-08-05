/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable no-trailing-spaces */
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './users.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  datauser: any;

  handlerMessage = '';
  roleMessage = '';
  constructor(
    private router: ActivatedRoute,
    private navRouter: Router,
    private service: UsersService,
    private alertController: AlertController,
    private toastController: ToastController,
    private storage: Storage
    ) {
    this.navRouter.navigateByUrl('/splash-screen');

  }
  ngOnInit(): void {
     this.storage.create();
    this.displayData();
  }
  displayData() {
    this.service.display().subscribe((data) => {
      this.datauser = data;
    });

}
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Are You Sure Logout!',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          this.handlerMessage = 'Alert canceled';
        },
      },
      {
        text: 'Yes',
        role: 'confirm',
        handler: async () => {
          this.handlerMessage = 'Alert confirmed';
          this.navRouter.navigateByUrl('/login');
          const toast = await this.toastController.create({
            message: 'SuccessFully Logout!',
            duration: 1500,
            icon: 'checkmark-circle-outline'
          });

          await toast.present();
        },
      },
    ],
  });
  await alert.present();

  const { role } = await alert.onDidDismiss();
  this.roleMessage = `Dismissed with role: ${role}`;
}
}
