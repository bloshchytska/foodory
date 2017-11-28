import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from "../model/recipe.model";

@Component({
  selector: 'app-recipe-catalog',
  templateUrl: './recipe-catalog.component.html',
  styleUrls: ['./recipe-catalog.component.css']
})
export class RecipeCatalogComponent implements OnInit {

  @Output()
  recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1',
      'simply test 1',
      'https://s-media-cache-ak0.pinimg.com/736x/d9/10/c8/d910c8129948718be45c84a55f2a7682.jpg'),
    new Recipe('Test Recipe 2',
      'simply test 2',
      'http://www.seriouseats.com/recipes/assets_c/2016/12/20161201-crispy-roast-potatoes-29-thumb-1500xauto-435281.jpg'),
  ];

  constructor() { }

  ngOnInit() { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
