import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desciption: string, imagePath: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desciption;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}