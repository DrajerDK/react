export interface ICocktail {
    idDrink: string;
    strDrink: string;
    strDrinkThumb: string;
    strInstructions: string;
    [key: string]: any;
}
export interface IButton {
    text: string,
    // isDisabled: boolean,
    clickFunction?: () => void
    // typeButton: string
}

export interface IInput {
    inputType: string;
    inputPlaceholder: string;
    inputClass?: string
}

export interface IInitialState {
    cocktails: [] | ICocktail[],
    oneRecipe: [] | ICocktail[],
    favorites: [] | ICocktail[],
    status: null | string,
    error: null | string,
    searchResultCocktails: ICocktail[] | null
}