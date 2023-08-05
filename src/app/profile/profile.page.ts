/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable prefer-const */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable id-blacklist */
/* eslint-disable no-unused-labels */
/* eslint-disable no-trailing-spaces */
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { UsersService } from '../users.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  handlerMessage = '';
  roleMessage = '';
  datauser: any;
  currentUser: any;
  constructor(
    private service: UsersService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: ActivatedRoute,
    private navRouter: Router,
    private storage: Storage
    ) { }
    form: any = new FormGroup({
      Fullname: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    });

  ngOnInit(): void {
  }


  ionViewWillEnter() {
    this.storage.get('user').then((data) => {

      this.display(JSON.parse(data));
     });
    console.log('will enter ');

  }


  display(user: any){
    console.log(user);

    this.service.check(user._id).subscribe(res =>{
      console.log(res);
      this.currentUser = res;
    },err=>{
      console.log(err);
    })

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
