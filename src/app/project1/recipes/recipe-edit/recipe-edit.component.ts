import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

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
    let imageUrl = "";
    let description = "";
    let recipeIngredient = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imageUrl = recipe.imagePath;
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
      imageUrl: new FormControl(imageUrl, Validators.required),
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

  update() {
    console.log(this.recipieForm.value)
  }
}
