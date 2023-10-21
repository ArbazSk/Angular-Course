import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    imgredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Chicken", 2),
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.imgredientsChanged.emit(this.getIngredients());
    }

    public addIngredientsArray(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.imgredientsChanged.emit(this.getIngredients());
    }
}