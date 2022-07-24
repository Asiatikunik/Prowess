import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prowess';
  public items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {label:'Acceuil'},
          {label:'Nous Contacter'}
      ];
  }

}
