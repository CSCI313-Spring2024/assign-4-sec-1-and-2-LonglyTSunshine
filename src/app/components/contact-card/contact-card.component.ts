import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contact-card',
  standalone: true,
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent {
  @Input() contact!: Contact;

  @Output() editContact = new EventEmitter<Contact>();
  @Output() deleteContact = new EventEmitter<number>();  

  edit() {
    console.log('[Edit Clicked]', this.contact);
    this.editContact.emit(this.contact);
  }
  

  delete() {
    this.deleteContact.emit(this.contact.id);
  }
}
