import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  email: string;

  constructor(private contactsService:ContactsService,private router:Router) { }

  ngOnInit() {
  }
  addContact(){
    const contact={
      name:this.nombre,
      surname:this.apellido1,
      lastName:this.apellido2,
      phone:this.telefono,
      email:this.email

    };
    this.contactsService.newContact(contact);
    this.router.navigate(['/']);
  }
}
