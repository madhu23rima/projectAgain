import { Component, OnInit,Injectable } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})

@Injectable()
export class RecipeListComponent implements OnInit {
 recipes:Recipe[];
  constructor(private recipeService: RecipeService) {
  
   }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log('list initiated');
    console.log(this.recipes);
  }

}
