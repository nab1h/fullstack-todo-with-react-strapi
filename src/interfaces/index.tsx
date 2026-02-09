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
export interface ILoginForm {
  name: keyof ILogin;
  type: string;
  placeholder: string;
  validation?: {
    required?: boolean;
    minLength?: number;
    pattern?: RegExp;
  };
}
export interface ILogin {
  identifier: string;
  password: string;
}
export default interface IErrorHandlerForm{
    error:{
        message?: string;
    }
}