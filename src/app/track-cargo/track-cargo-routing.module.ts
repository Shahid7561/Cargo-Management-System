import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackCargoPage } from './track-cargo.page';

const routes: Routes = [
  {
    path: '',
    component: TrackCargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackCargoPageRoutingModule {}
