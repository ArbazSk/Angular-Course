import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    private recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
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
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getSelectedRecipeEmitter() {
        return this.recipeSelected;
    }

    public addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientsArray(ingredients);

    }
}