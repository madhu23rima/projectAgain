import {ActivatedRoute, Router,  Params} from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.sass']
})
@Injectable()
export class RecipeDetailComponent implements OnInit {
recipe: Recipe
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
   this.route.params.subscribe( (params: Params) =>{
    const index = +params['id'];
    this.recipe = this.recipeService.getRecipe(index);
   });

  }

}
