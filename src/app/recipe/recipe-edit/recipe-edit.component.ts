
import { Component, OnInit,ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { FormGroup }    from '@angular/forms'

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.sass']
})
export class RecipeEditComponent implements OnInit {
//@ViewChild('#f') recipeForm: NgForm
recipe: Recipe;
//recipeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log('inside recipe edit')
  }

  onSubmit(){
    console.log( 'Submit Clicked')
    console.log( this.recipe);
  }

}
