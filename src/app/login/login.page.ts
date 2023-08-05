/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController, ToastController,MenuController } from '@ionic/angular';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  showPassword=false;
  showPassword2=false;
  passwordToggleIcon = "eye-outline";

  passwordToggleIcon2 = "eye-outline";

  constructor(
    private service: UsersService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCrtl: ToastController,
    private router: Router,
    private http: HttpClient,
    private storage: Storage,
    private menuCtrl: MenuController
  ) { }


  form = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });

  onRegister() {
    this.router.navigate(['/register']);
  }

  ionViewWillEnter() {

    this.menuCtrl.enable(false);
  }
  ionViewDidLeave() {
    this.menuCtrl.enable(true);
  }

  togglePassword(): void{
    this.showPassword = !this.showPassword;

    if(this.passwordToggleIcon=="eye-outline"){
      this.passwordToggleIcon="eye-off-outline";
    }else{
      this.passwordToggleIcon="eye-outline";
    }
 }

 togglePassword2(): void{
  this.showPassword2 = !this.showPassword2;

  if(this.passwordToggleIcon2=="eye-outline"){
    this.passwordToggleIcon2="eye-off-outline";
  }else{
    this.passwordToggleIcon2="eye-outline";
  }
}


  async login(form: FormGroup) {
    const headers = {
      enctype: 'multipart/form-data;',
      'Content-Type': 'application/json',
      Accept: 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };
    if (form.value.Email === '' || form.value.Password === '') {
      const toast = await this.toastCrtl.create({
        message: 'Please fill all details!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });

      await toast.present();
    }
    else {
      const formData = new FormData();

      const formDataJsonString = JSON.stringify(formData);
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: formDataJsonString,
      };
      const dataJson = {
        Email: form.value.Email,
        Password: form.value.Password,
      };

      this.service.login(dataJson).subscribe(async res => {
        console.log(res);
        this.storage.set('user', JSON.stringify(res));
        this.router.navigateByUrl('/home');
        const toast = await this.toastCrtl.create({
          message: 'SuccessFully Login!',
          duration: 1500,
          icon: 'checkmark-circle-outline'
        });
        form.reset();
        await toast.present();
      }, async err => {
        const toast = await this.toastCrtl.create({
          message: err.error.error,
          duration: 1500,
          icon: 'alert'
        });
        await toast.present();
      });
      console.log('dataJson:', dataJson);

    }
  }

}
