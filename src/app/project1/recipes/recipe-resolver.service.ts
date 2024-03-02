import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { inject } from "@angular/core";

export const recipeResolver: ResolveFn<Recipe[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) => {
    return inject(DataStorageService).fetchRecipe();
};