import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';


@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent {
updateProduit(_t13: Produit) {
throw new Error('Method not implemented.');
}
  

  produits! : Produit[];

  constructor(private produitService: ProduitService ) {
    
    // this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
    this.chargerProduits();
  }
  
  chargerProduits()
  {
    this.produitService.listeProduit().subscribe(prods => {
    console.log(prods);
    this.produits = prods;
    });
  }

  supprimerProduit(p: Produit)
    {
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
      console.log("produit supprimé");
      this.chargerProduits();
      });
    }
  }