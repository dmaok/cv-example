import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsItemComponent } from './contacts-item/contacts-item.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactsItemComponent
  ],
  exports: [
    ContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContactsModule {}
