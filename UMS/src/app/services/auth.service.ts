import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isUserLogged = true;
  constructor() { }
  
  isUserLoggedIn() {
     return this.isUserLogged;
  }
  signIn(email: String, password: string){
      
  }
    signUp(username:string, email: String, password: string){

    }
    logout() {
      this.isUserLogged = false;
    }
}
