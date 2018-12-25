import { Component, NgModule } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";

import { RecipeComponent } from './recipe/recipe.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { HomeComponent } from './core/home/home.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'recipe', component: RecipeComponent,
      children: [
      { path: '', component: RecipeStartComponent},
      { path: ':id', component: RecipeDetailComponent},
      { path: 'edit/:id', component: RecipeEditComponent}
    ]
  },
  { path: 'shoppinglist', component: ShoppingListComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
