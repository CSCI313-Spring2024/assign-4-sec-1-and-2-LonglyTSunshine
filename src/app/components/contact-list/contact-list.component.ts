import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { CommonModule } from '@angular/common';
import { Contact } from '../../contact.model';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [ContactCardComponent, CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  constructor(private contactService: ContactService) {}

  get contacts() {
    const signalFn = this.contactService.getContacts;
    const current = signalFn();
    console.log('[]', current); 
    return current;
    
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id);
  }
  

  editContact(contact: Contact) {
    this.contactService.editTarget.set(contact);
  }
  
}
