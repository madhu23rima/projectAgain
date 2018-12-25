import { Component, NgModule } from '@angular/core';
import { Routes } from "@angular/router";

import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipe', component: RecipeComponent },
    { path: 'shoppinglist', component: ShoppingListComponent }
];


@NgModule({
  imports:  [
  RouterModule.forRoot(routes)
  ],
  exports: [RouterModule] 
})

export class AppRoutingModule {

}
