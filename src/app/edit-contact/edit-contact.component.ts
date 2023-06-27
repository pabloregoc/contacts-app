import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contact:any;

  constructor(private contactsService: ContactsService, private router: Router) { }

  ngOnInit() {
    this.contact=this.contactsService.selectedContact;
  }
  updateContact():void{
    this.contactsService.updateContact(this.contact);
    this.router.navigateByUrl("/",{replaceUrl:true});
  }
}
