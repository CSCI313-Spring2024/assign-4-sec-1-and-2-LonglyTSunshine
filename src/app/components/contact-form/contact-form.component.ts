import { Component, effect, inject } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../contact.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  newContact: Contact = {
    id: 0,
    fName: '',
    lName: '',
    phoneNumber: '',
    email: ''
  };

  constructor(private contactService: ContactService) {
    // ✅ 正确的方式是：effect 要在构造器里使用
    effect(() => {
      const target = this.contactService.editTarget();
      if (target) {
        this.newContact = { ...target };
      }
    });
  }

  addContact() {
    if (this.newContact.fName && this.newContact.lName) {
      if (this.newContact.id === 0) {
        this.contactService.addContact({ ...this.newContact });
      } else {
        this.contactService.updateContact({ ...this.newContact });
      }

      this.newContact = { id: 0, fName: '', lName: '', phoneNumber: '', email: '' };
      this.contactService.editTarget.set(null); // reset editing
    }
  }


  cancelEdit() {
    this.newContact = {
      id: 0,
      fName: '',
      lName: '',
      phoneNumber: '',
      email: ''
    };
    this.contactService.editTarget.set(null); 
  }
  


}
