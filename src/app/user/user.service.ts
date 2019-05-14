import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';


@Injectable()
export class UserService{
    

    baseUrl = "http://localhost:8081/";

    constructor(private http: HttpClient){}

    newUser(user: User): Observable<User> {
        return this.http.post<User>(this.baseUrl + "user", user);
    }

    getUserByEmail(email:string):Observable<User> {
       return this.http.get<User>(this.baseUrl+ "user/bymail/" + email);
    }

}