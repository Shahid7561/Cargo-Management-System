/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable eqeqeq */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  showPassword = false;
  showPassword2 = false;
  passwordToggleIcon = "eye-outline";

  passwordToggleIcon2 = "eye-outline";

  constructor(
    private service: UsersService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private router: Router
  ) { }

  form = new FormGroup({
    Fullname: new FormControl('', [Validators.required, Validators.maxLength(25),]),
    Phone: new FormControl('', [Validators.required, Validators.maxLength(11),]),
    Email: new FormControl('', [Validators.required, Validators.maxLength(50),]),
    Password: new FormControl('', [Validators.required, Validators.maxLength(10),]),
    ConfirmPassword: new FormControl('', [Validators.required, Validators.maxLength(10),]),
  });


  async onSubmit(form: FormGroup) {
    const headers = {
      'enctype': 'multipart/form-data;',
      'Content-Type': 'application/json',
      'Accept': 'plain/text',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
      'Access-Control-Allow-Headers': 'Authorization, Origin, Content-Type, X-CSRF-Token',
    };

    if (form.value.Fullname == '' && form.value.Phone == '' && form.value.Email == '' && form.value.Password == '' && form.value.ConfirmPassword == '') {
      const toast = await this.toastCtrl.create({
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
          'Accept': 'application/json',
        }),
        body: formDataJsonString,
      };
      const dataJson = {
        Fullname: form.value.Fullname,
        Phone: form.value.Phone,
        Email: form.value.Email,
        Password: form.value.Password,
        ConfirmPassword: form.value.ConfirmPassword
      };
      this.service.create(dataJson).subscribe(async res => {
        console.log(res);
        this.router.navigateByUrl('/login');
        const toast = await this.toastCtrl.create({
          message: 'SuccessFully Register!',
          duration: 1500,
          icon: 'checkmark-circle-outline'
        });
        form.reset();
        await toast.present();
      }, async err => {
        const toast = await this.toastCtrl.create({
          message: err.error.error,
          duration: 1500,
          icon: 'alert'
        });

        await toast.present();
      });

      console.log('dataJson:', dataJson);
    }
  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.passwordToggleIcon == "eye-outline") {
      this.passwordToggleIcon = "eye-off-outline";
    } else {
      this.passwordToggleIcon = "eye-outline";
    }
  }

  togglePassword2(): void {
    this.showPassword2 = !this.showPassword2;

    if (this.passwordToggleIcon2 == "eye-outline") {
      this.passwordToggleIcon2 = "eye-off-outline";
    } else {
      this.passwordToggleIcon2 = "eye-outline";
    }
  }
}
