import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookCargoPage } from './book-cargo.page';

const routes: Routes = [
  {
    path: '',
    component: BookCargoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookCargoPageRoutingModule {}
