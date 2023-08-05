/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
import { Component, OnInit } from '@angular/core';
import { CargoService } from '../cargo.service';
import { UsersService } from '../users.service';



@Component({
  selector: 'app-mycargo',
  templateUrl: './mycargo.page.html',
  styleUrls: ['./mycargo.page.scss'],
})
export class MycargoPage implements OnInit {

  constructor(
    private service: CargoService,
    private userservice: UsersService,
  ) { }

  datauser :any;
  userdata :any;

  ngOnInit() {
    this.displayData();
    this.userData();
  }

  displayData(){
    this.service.display().subscribe((data)=>{
      this.datauser=data;
    });
  }
  userData(){
    this.userservice.display().subscribe((Udata)=>{
      this.userdata=Udata;
    });
  }

}
