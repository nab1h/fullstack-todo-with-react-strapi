export interface IRegisterInputForm{
    name:string,
    type:string,
    placeholder:string,
    validation?:{
        required?:boolean,
        minLength?: number,
        pattern?: RegExp
    }
}