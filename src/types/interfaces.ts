// export interface IButton {
//     text: string,
//     isDisabled: boolean,
//     clickFunction: () => void,
//     typeButton: string
// }
export interface IButton {
    text: string,
    // isDisabled: boolean,
    // clickFunction: () => void,
    // typeButton: string
}

export interface ITabs {
    tabNameOne: string, 
    tabNameTwoo: string, 
    tabNameThree: string
}

export interface IInput {
    inputType: string;
    inputPlaceholder: string;
    inputName: string;
    inputClass?: string
}
export interface ITextarea {
    textareaType: string;
    textareaPlaceholder: string;
    textareaName: string;
    textareaClass?: string
}