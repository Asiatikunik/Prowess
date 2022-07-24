import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.css']
})
export class FormMessageComponent implements OnInit {

  nom: string = "";
  prenom: string = "";
  mail: String = "";
  objet: string = "";
  message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}