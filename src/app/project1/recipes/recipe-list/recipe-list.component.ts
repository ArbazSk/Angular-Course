import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Chicken Rice","South African Food", "https://tinybeans.com/wp-content/uploads/2021/10/african-food-recipes.png"),
    new Recipe("Barramundi","Australian Food", "https://australianbarramundi.com.au/wp-content/uploads/2022/07/national-barramundi-day-1916-cropped.jpg"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
