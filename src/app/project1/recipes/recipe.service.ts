import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    /*  private recipes: Recipe[] = [
         new Recipe("Chicken Rice", "South African Food",
             "https://tinybeans.com/wp-content/uploads/2021/10/african-food-recipes.png",
             [
                 new Ingredient("Chicken", 1),
                 new Ingredient("Rice", 1)
             ]),
         new Recipe("Barramundi", "Australian Food",
             "https://australianbarramundi.com.au/wp-content/uploads/2022/07/national-barramundi-day-1916-cropped.jpg",
             [
                 new Ingredient("Barramundi Fish", 1),
                 new Ingredient("Garlic Sauce", 1)
             ]),
     ]; */

    private recipes: Recipe[] = [];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice())
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientsArray(ingredients);
    }

    addRecipe(newRecipe: Recipe) {
        this.recipes.push(newRecipe);
        this.emitRecipesArr();
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.emitRecipesArr();
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.emitRecipesArr();
    }

    emitRecipesArr() {
        this.recipeChanged.next(this.recipes.slice());
    }
}