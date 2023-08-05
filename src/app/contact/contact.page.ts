import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor() { }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
      
    }, 2000);
  };

  ngOnInit() {
  }

}
