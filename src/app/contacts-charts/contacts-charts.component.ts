import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-charts',
  templateUrl: './contacts-charts.component.html',
  styleUrls: ['./contacts-charts.component.scss']
})
export class ContactsChartsComponent implements OnInit {
  phoneData=[];
  emailData=[];


  constructor(private contactService:ContactsService) { }

  ngOnInit() {
    this.contactService.getContacts().subscribe((contacts:any[])=>{
      const contactsWithEmail=contacts.filter((contact)=>contact.email);
      const contactsWithoutEmail= contacts.filter((contact)=>!contact.email);
      this.emailData=[
        {name:'Con Email',
        value: contactsWithEmail.length},
        {name:'Sin Email',
        value:contactsWithoutEmail.length}
      ]
      })
  
  this.contactService.getContacts().subscribe((contacts:any[])=>{
    const contactsWithPhone=contacts.filter((contact)=>contact.phone);
    const contactsWithoutPhone= contacts.filter((contact)=>!contact.phone);
    this.phoneData=[
      {name:'Con Teléfono',
      value: contactsWithPhone.length},
      {name:'Sin Teléfono',
      value:contactsWithoutPhone.length}
    ]
    })
  }
}
