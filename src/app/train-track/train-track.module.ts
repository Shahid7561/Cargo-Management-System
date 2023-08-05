import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainTrackPageRoutingModule } from './train-track-routing.module';

import { TrainTrackPage } from './train-track.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainTrackPageRoutingModule
  ],
  declarations: [TrainTrackPage]
})
export class TrainTrackPageModule {}
