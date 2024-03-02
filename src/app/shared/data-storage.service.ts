import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { RecipeService } from "../project1/recipes/recipe.service";
import { Recipe } from "../project1/recipes/recipe.model";
import { map, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class DataStorageService {
    private readonly API_URL = "https://angular-practice-22862-default-rtdb.firebaseio.com";

    private http = inject(HttpClient);
    private recipeService = inject(RecipeService);

    storeRecipes() {
        const recipes = this.recipeService.getRecipes()
        this.http.put(`${this.API_URL}/recipes.json`, recipes)
            .subscribe(data => {
                console.log(data)
            })
    }

    fetchRecipe() {
        return this.http.get<Recipe[]>(`${this.API_URL}/recipes.json`)
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }),
                tap(recipes => this.recipeService.setRecipes(recipes)));
    }

}