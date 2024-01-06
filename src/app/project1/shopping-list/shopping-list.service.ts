import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    imgredientsChanged = new Subject<Ingredient[]>();
    editIngredient$ = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Chicken", 2),
    ];

    public getIngredients() {
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.imgredientsChanged.next(this.getIngredients());
    }

    updateIngredient(id: number, ingredient: Ingredient) {
        this.ingredients[id] = ingredient;
        this.imgredientsChanged.next(this.getIngredients());
    }

    public addIngredientsArray(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.imgredientsChanged.next(this.getIngredients());
    }

    findIngredientById(id: number) {
        return this.ingredients[id];
    }

    editIngredient(id: number) {
        this.editIngredient$.next(id);
    }
}