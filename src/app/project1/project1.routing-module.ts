import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component.";
import { authGuard } from "./auth/auth.guard";
import { Project1Component } from "./project1.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { recipeResolver } from "./recipes/recipe-resolver.service";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes: Routes = [
    {
        path: '', component: Project1Component,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'recipes', component: RecipesComponent, canActivate: [authGuard],
                children: [
                    { path: '', component: RecipeStartComponent },
                    { path: 'new', component: RecipeEditComponent },
                    { path: ':id', component: RecipeDetailComponent, resolve: { resolver: recipeResolver } },
                    { path: ':id/edit', component: RecipeEditComponent, resolve: { resolver: recipeResolver } },
                ]
            },
            { path: 'shopping-list', component: ShoppingListComponent },
            { path: 'login', component: AuthComponent }
        ]
    },
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Project1RoutingModule {

}