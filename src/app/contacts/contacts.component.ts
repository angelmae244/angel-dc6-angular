import { Component, OnInit } from '@angular/core';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title = "List of Contacts"
  contacts;
  contactsAll

  constructor(service: ContactsService) { 
    this.contacts = service.getContacts()
    this.contactsAll = this.contacts
  }

  showAllFemale() {
    this.showAllContact()
    this.contactsAll = this.contacts.filter(contact => contact.gender === 'Female');
  }

  showAllMale() {
    this.showAllContact()
    this.contactsAll = this.contacts.filter(contact => contact.gender === 'Male');
  }

  showAllContact() {
    this.contactsAll = this.contacts
  }

  ngOnInit(): void {
  }

}
