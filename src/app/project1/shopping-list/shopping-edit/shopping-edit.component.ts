import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private ShoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredients(ingredient: string, amount: string) {
    this.ShoppingListService.addIngredients(new Ingredient(ingredient, Number(amount)));
  }

}
