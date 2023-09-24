import { Component } from '@angular/core';
import { Fournisseur } from 'src/models/fournisseur';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent {
   list: Fournisseur[] = [
    {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
    {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
    {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
    {idFournisseur:400,code:"40ABC452",libelle:"asus"}
  ]
  getColor(code: string): string {
    if (code.startsWith('2A')) {
      return 'bold';
    } else {
      return 'normal';
    }
  }
  
  supprimerFournisseur(index: number): void {
    if (index >= 0 && index < this.list.length) {
      this.list.splice(index, 1);
    }
  }
}