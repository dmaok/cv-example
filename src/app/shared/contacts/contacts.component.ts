import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
  @Input() contactsList: Contact[] = [];
}
