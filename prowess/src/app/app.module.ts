import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { FormMessageComponent } from './form-message/form-message.component';
// import { Routes } from '@angular/router';
import {InputTextModule} from 'primeng/inputtext';
import { ContactComponent } from './contact/contact.component';
import { GMapModule } from 'primeng/gmap';
import { DialogModule } from 'primeng/dialog';
import { HeaderComponent } from './header/header.component';
import { ChipModule } from 'primeng/chip';
import { FooterComponent } from './footer/footer.component';
import { TabMenuModule } from 'primeng/tabmenu';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [
    AppComponent,
    FormMessageComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    GMapModule,
    DialogModule,
    ChipModule,
    TabMenuModule,
    BreadcrumbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
