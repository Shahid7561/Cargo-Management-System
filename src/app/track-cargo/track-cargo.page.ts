/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-track-cargo',
  templateUrl: './track-cargo.page.html',
  styleUrls: ['./track-cargo.page.scss'],
})
export class TrackCargoPage implements OnInit {
  train_no: any = '';
  form = new FormGroup({
    train_no: new FormControl('', [Validators.required, Validators.maxLength(50),])
  });


  constructor(
    private toastCrtl: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async onSubmit(){
    console.log(this.train_no);

    if (this.train_no == '') {
      const toast = await this.toastCrtl.create({
        message: 'Please Enter Train Number!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });
      await toast.present();
  }else{
    this.router.navigateByUrl('/train-track');
  }

}
}
