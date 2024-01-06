import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("form") form: NgForm;
  editMode = false;
  editItemId: number;
  editItemIngredient: Ingredient;
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ShoppingListService.editIngredient$.subscribe(id => {
      this.editMode = true;
      this.editItemId = id;
      this.editItemIngredient = this.ShoppingListService.findIngredientById(id);
      this.form.form.patchValue({
        ingredient: this.editItemIngredient.name,
        amount: this.editItemIngredient.amount
      })
    })
  }

  addIngredients(form: NgForm) {
    let ingredient: string = form.value.ingredient;
    let amount: string = form.value.amount;
    let ing = new Ingredient(ingredient, Number(amount))
    this.editMode ? this.ShoppingListService.updateIngredient(this.editItemId, ing) : this.ShoppingListService.addIngredients(ing);
    this.editMode = false;
    this.form.reset();
  }

}
