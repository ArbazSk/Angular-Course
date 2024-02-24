import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipieForm: UntypedFormGroup;

  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

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
    let recipeIngredient = new UntypedFormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.description;

      if (recipe?.ingredients.length > 0) {
        for (let ing of recipe.ingredients) {
          recipeIngredient.push(
            new UntypedFormGroup({
              name: new UntypedFormControl(ing.name, Validators.required),
              amount: new UntypedFormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
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
    return (<UntypedFormArray>this.recipieForm.get('ingredients')).controls;
  }

  addIngredient() {
    (<UntypedFormArray>this.recipieForm.get('ingredients'))
      .push(new UntypedFormGroup({
        name: new UntypedFormControl("", Validators.required),
        amount: new UntypedFormControl("", [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
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
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.route })
  }

  deleteIng(index: number) {
    (<UntypedFormArray>this.recipieForm.get('ingredients')).removeAt(index);
  }
}
