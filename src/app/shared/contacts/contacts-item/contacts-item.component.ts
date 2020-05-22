import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact';

@Component({
  selector: 'app-contacts-item',
  templateUrl: './contacts-item.component.html',
  styleUrls: ['./contacts-item.component.scss']
})
export class ContactsItemComponent {
  @Input() contact: Contact;
}
