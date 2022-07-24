import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];
  scrollableItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
      this.items = [
          {label: 'Accueil', icon: 'pi pi-fw pi-home'},
          {label: 'Nos produit', icon: 'pi pi-fw pi-calendar'},
          {label: 'A propos', icon: 'pi pi-fw pi-pencil'},
          {label: 'Nous contacter', icon: 'pi pi-fw pi-file'},
          {label: 'Devis en ligne', icon: 'pi pi-fw pi-file'},
          {label: 'Mon espace client', icon: 'pi pi-fw pi-cog'},
      ];
      this.scrollableItems = Array.from({ length: 50 }, (_, i) => ({ label: `Tab ${i + 1}`}));
  }

}
