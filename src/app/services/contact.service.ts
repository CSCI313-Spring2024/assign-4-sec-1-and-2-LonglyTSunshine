// src/app/services/contact.service.ts
import { Injectable, signal } from '@angular/core';
import { Contact } from '../contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts = signal<Contact[]>([
    { id: 1, fName: 'Tony', lName: 'Stark', phoneNumber: '101-000-7777', email: 'Tony@Starkgmail.com' },
    
  ]);

  editTarget = signal<Contact | null>(null);
  getContacts = this.contacts.asReadonly();

  addContact(contact: Contact) {
    const updated = [...this.contacts(), { ...contact, id: Date.now() }];
    this.contacts.set(updated);
  }

  deleteContact(id: number) {
    const updated = this.contacts().filter(c => c.id !== id);
    this.contacts.set(updated);
  }

  updateContact(updatedContact: Contact) {
    const updated = this.contacts().map(c => c.id === updatedContact.id ? updatedContact : c);
    this.contacts.set(updated);
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts().find(c => c.id === id);
  }

 


  
}
