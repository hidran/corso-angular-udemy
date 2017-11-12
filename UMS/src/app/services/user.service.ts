import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {UserInterface} from '../interfaces/user';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class UserService {
    users: User[] = [];
    private APIURL = 'http://localhost:8000/users';

    constructor(private http: HttpClient) {
    }

       getUsers() {
       return  this.http.get(this.APIURL);
    }
    getUser(id: number) {
        return  this.http.get(this.APIURL + '/'+ id);
    }

    deleteUser(user) {
        const index = this.users.indexOf(user);
        if (index >= 0) {
            this.users.splice(index, 1);
        }
    }
    updateUser(user: UserInterface) {
        const idx = this.users.findIndex((v) => v.id === user.id);
      
        if (idx !== -1) {
            this.users[idx] = user;
        }
    }
    createUser(user: UserInterface) {
      
            this.users.splice(0, 0, user);
           
    }
}
