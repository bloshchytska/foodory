import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from "./components/header/header.component";
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeCatalogComponent } from './components/recipes/recipe-catalog/recipe-catalog.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './components/recipes/recipe-catalog/recipe-item/recipe-item.component';
import { ShoppingCatalogComponent } from './components/shopping-catalog/shopping-catalog.component';
import { ShoppingEditComponent } from './components/shopping-catalog/shopping-edit/shopping-edit.component';
import { DropDownDirective }  from "./directives/dropdown.directive";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeCatalogComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingCatalogComponent,
    ShoppingEditComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
