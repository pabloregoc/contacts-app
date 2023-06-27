import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCard, MatCardModule, MatChipInput, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FormsModule } from '@angular/forms';
import { NewContactComponent } from './new-contact/new-contact.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component';
import { ContactsChartsComponent } from './contacts-charts/contacts-charts.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    ContactsTableComponent,
    ContactDetailComponent,
    EditContactComponent,
    NewContactComponent,
    DialogConfirmationComponent,
    ContactsChartsComponent,
    DialogConfirmationComponent,
  ],
  entryComponents:[DialogConfirmationComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    NgxChartsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
