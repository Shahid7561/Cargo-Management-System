/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-book-cargo',
  templateUrl: './book-cargo.page.html',
  styleUrls: ['./book-cargo.page.scss'],
})
export class BookCargoPage implements OnInit {

  agents: any;
  state: any;
  city: any;
  constructor(
    private service: AgentService,
    private route: Router,
    private toastCtrl: ToastController
  ) { }

  form: any = new FormGroup({
    State: new FormControl(''),
    City: new FormControl('')
  });

  ngOnInit() {
    this.service.display().subscribe((data) => {
      this.agents = data;
    });

  }

  async onsubmit(form: FormGroup) {
    const data = {
      State: form.value.State,
      City: form.value.City,
    };
    if (form.value.State === '' && form.value.City === '') {
      const toast = await this.toastCtrl.create({
        message: 'Please select your state and city!',
        duration: 1500,
        icon: 'checkmark-circle-outline'
      });
      await toast.present();
    }
    else {
      this.state = form.value.State,
        this.city = form.value.City
    }
  }


}
