import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsItemComponent } from './contacts-item/contacts-item.component';

import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsItemComponent
  ],
  imports: [
    PipesModule,
    CommonModule,
  ],
  exports: [
    ContactsComponent
  ]
})
export class ContactsModule {}
