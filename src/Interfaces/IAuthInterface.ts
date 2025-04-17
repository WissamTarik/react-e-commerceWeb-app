import { loadingType } from "../genericTypes/genericTypes";
export interface IAuthInterface {
  isLoading: loadingType;
  token: string | null;
  isError: boolean;
  message: string | null;
}
export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
}
export interface ILoginData {
  email: string;
  password: string;
}
export interface IUpdatePasswordData {
  email: string;
newPassword: string;
}
