export  interface IRecipe{
    id: number,
    name: string,
    description : string
}

export  class Recipe implements IRecipe {
    id: number;
    name: string;
    description : string
}