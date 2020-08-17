export class User{
  id:string;
  email:string;
  password:string;


  constructor(UserResponse:any) {
    this.email=UserResponse.email;
    this.password=UserResponse.password;
  }
}
