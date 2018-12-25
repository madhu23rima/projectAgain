import { Recipe } from './recipe.model';


export class RecipeService{
 recipes:Recipe[] =[

    {id:1, name :"test1", description: "Description of first recipe"},
    {id:2, name :"test2", description: "Description of second recipe"},
    {id:3, name :"test3", description: "Description of third recipe"}
 ];
  constructor(){

  }

  getRecipes(){
      return  this.recipes.slice();
  }

  getRecipe(index:number){
     return this.recipes[index];
  }


}