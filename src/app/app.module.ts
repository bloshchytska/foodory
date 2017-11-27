import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeCatalogComponent } from './recipes/recipe-catalog/recipe-catalog.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-catalog/recipe-item/recipe-item.component';
import { ShoppingCatalogComponent } from './shopping-catalog/shopping-catalog.component';
import { ShoppingEditComponent } from './shopping-catalog/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeCatalogComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingCatalogComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
