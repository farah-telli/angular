import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent {
  idFournisseur = 105;
  code = 'A104B89';
  libelle = 'MyTeck';
  hide: boolean = false;
  
  toggleHide() {
    this.hide = !this.hide; // Inverse la valeur de hide (true devient false et vice versa)
    console.log('Valeur de hide :', this.hide); // Affiche la valeur dans la console du navigateur
  }

}
