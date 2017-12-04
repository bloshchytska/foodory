import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../../models/ingredient.model";

@Component({
  selector: 'app-shopping-catalog',
  templateUrl: './shopping-catalog.component.html',
  styleUrls: ['./shopping-catalog.component.css']
})
export class ShoppingCatalogComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 10),
  ];

  constructor() { }

  ngOnInit() { }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
