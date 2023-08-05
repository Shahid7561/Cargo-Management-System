import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainTrackPage } from './train-track.page';

const routes: Routes = [
  {
    path: '',
    component: TrainTrackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainTrackPageRoutingModule {}
