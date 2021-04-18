export interface Login {
  code:number;
  message:string;
  body:BodyLogin;

}

 export interface BodyLogin {
    accessToken?:string;
    tokenType?:string;
}
