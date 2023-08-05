/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-train-track',
  templateUrl: './train-track.page.html',
  styleUrls: ['./train-track.page.scss'],
})
export class TrainTrackPage implements OnInit {



   data_82902  = [
    {
      station_name : "ahmedabad",
      current_status : "passed",
      time : "passed on 6:40 AM"
    },
    {
      station_name : "nadiad",
      current_status : "passed",
      time : "passed on 7:11 AM"
    },
    {
      station_name : "vadodara",
      current_status : "present",
      time : "passed on 8:00 AM"
    },
    {
      station_name : "bharuch",
      current_status : "future",
      time : "passed on 8:54 AM"
    },
    {
      station_name : "surat",
      current_status : "future",
      time : "passed on 9:33 AM"
    }
  ];
  //   "82902" : [
  //     {
  //       station_name : "ahmedabad",
  //       current_status : "passed",
  //       time : "passed on 6:40 AM"
  //     },
  //     {
  //       station_name : "nadiad",
  //       current_status : "passed",
  //       time : "passed on 7:11 AM"
  //     },
  //     {
  //       station_name : "vadodara",
  //       current_status : "present",
  //       time : "passed on 8:00 AM"
  //     },
  //     {
  //       station_name : "bharuch",
  //       current_status : "future",
  //       time : "passed on 8:54 AM"
  //     },
  //     {
  //       station_name : "surat",
  //       current_status : "future",
  //       time : "passed on 9:33 AM"
  //     }
  //   ],
  //   "12957": [
  //     {
  //       station_name : "ahmedabad",
  //       current_status : "passed",
  //       time : "passed on 18:39"
  //     },
  //     {
  //       station_name : "mahesana",
  //       current_status : "passed",
  //       time : "passed on 20:02"
  //     },
  //     {
  //       station_name : "abu road",
  //       current_status : "passed",
  //       time : "passed on 21:35"
  //     },
  //     {
  //       station_name : "ajmer",
  //       current_status : "present",
  //       time : "passed on 1:05 AM"
  //     },
  //     {
  //       station_name : "jaipur",
  //       current_status : "future",
  //       time : "passed on 2:55 AM"
  //     },
  //     {
  //       station_name : "new delhi",
  //       current_status : "future",
  //       time : "passed on 7:30 AM"
  //     },
  //   ],
  //   "11041" : [
  //     {
  //       station_name : "dadar",
  //       current_status : "passed",
  //       time : "passed on 23:55"
  //     },
  //     {
  //       station_name : "thane",
  //       current_status : "passed",
  //       time : "passed on 00:26 AM"
  //     },
  //     {
  //       station_name : "kalyan",
  //       current_status : "passed",
  //       time : "passed on 00:45 AM"
  //     },
  //     {
  //       station_name : "chinchvad",
  //       current_status : "present",
  //       time : "passed on 3:00 AM"
  //     },
  //     {
  //       station_name : "pune",
  //       current_status : "future",
  //       time : "passed on 3:35 AM"
  //     },
  //   ],
  //   "12833" : [
  //     {
  //       station_name : "ahmedabad",
  //       current_status : "passed",
  //       time : "passed on 00:36 AM"
  //     },
  //     {
  //       station_name : "vadodara",
  //       current_status : "passed",
  //       time : "passed on 2:22 AM"
  //     },
  //     {
  //       station_name : "surat",
  //       current_status : "passed",
  //       time : "passed on 4:56 AM"
  //     },
  //     {
  //       station_name : "jalgaon",
  //       current_status : "passed",
  //       time : "passed on 11:03 AM"
  //     },
  //     {
  //       station_name : "Akola",
  //       current_status : "passed",
  //       time : "passed on 14:00"
  //     },
  //     {
  //       station_name : "nagpur",
  //       current_status : "present",
  //       time : "passed on 18:44"
  //     },
  //     {
  //       station_name : "durg",
  //       current_status : "future",
  //       time : "passed on 00:11 AM"
  //     },
  //   ]
  // };


  constructor() { }

  ngOnInit() {
  }

}
