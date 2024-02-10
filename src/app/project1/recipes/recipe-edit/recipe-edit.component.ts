import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipieForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    })
  }

  initForm() {
    let recipeName = "";
    let imagePath = "";
    let description = "";
    let recipeIngredient = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;

      if (recipe?.ingredients.length > 0) {
        for (let ing of recipe.ingredients) {
          recipeIngredient.push(
            new FormGroup({
              name: new FormControl(ing.name, Validators.required),
              amount: new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.recipieForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: recipeIngredient
    })
  }

  getControls() {
    return (<FormArray>this.recipieForm.get('ingredients')).controls;
  }

  addIngredient() {
    (<FormArray>this.recipieForm.get('ingredients'))
      .push(new FormGroup({
        name: new FormControl("", Validators.required),
        amount: new FormControl("", [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
      }))
  }

  onSubmit() {
    // const newRecipe = new Recipe(
    //   this.recipieForm.value['name'],
    //   this.recipieForm.value['description'],
    //   this.recipieForm.value['imagePath'],
    //   this.recipieForm.value['ingredients']);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, this.recipieForm.value)
    } else {
      this.recipeService.addRecipe(this.recipieForm.value);
    }
  }
}
