import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookCargoPageRoutingModule } from './book-cargo-routing.module';

import { BookCargoPage } from './book-cargo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookCargoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BookCargoPage]
})
export class BookCargoPageModule {}
