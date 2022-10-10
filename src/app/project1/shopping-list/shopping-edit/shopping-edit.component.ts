import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredientsEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addIngredients(ingredient: string, amount: string){
    console.log(ingredient, typeof amount);
    
    this.addIngredientsEvent.emit(new Ingredient(ingredient, Number(amount)));
  }

}
