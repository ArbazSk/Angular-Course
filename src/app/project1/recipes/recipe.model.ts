export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desciption: string, imagePath: string){
        this.name = name;
        this.description = desciption;
        this.imagePath = imagePath;
    }
}