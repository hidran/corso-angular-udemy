import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isUserLogged = false;
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
