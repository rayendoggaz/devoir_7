import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})

export class AddProduitComponent {
  newProduit = new Produit();

  categories! : Categorie[];

  newIdCat! : number;

  newCategorie! : Categorie;

  constructor(private produitService: ProduitService , private router :Router,) { }

  ngOnInit() {
    this.produitService.listeCategories().subscribe(cats => {this.categories = cats;
    console.log(cats);
    });
  }

  message!: string;

    addProduit(){
      this.newProduit.categorie = this.categories.find(cat => cat.idCat == this.newIdCat)!;
      this.produitService.ajouterProduit(this.newProduit).subscribe(prod => {
        console.log(prod);
        this.router.navigate(['produits']);
      });
    }
  }