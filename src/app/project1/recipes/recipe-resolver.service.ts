import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { inject } from "@angular/core";
import { RecipeService } from "./recipe.service";

export const recipeResolver: ResolveFn<Recipe[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) => {
    const recipeService = inject(RecipeService);
    const recipe = recipeService.getRecipes();
    if (recipe.length === 0) {
        return inject(DataStorageService).fetchRecipe();
    } else {
        return recipe;
    }
};