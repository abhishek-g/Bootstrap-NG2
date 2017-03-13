/**
 * Created by abhishek on 03/13/2017.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

export interface User{
    id:number;
    name:string;
    username:string;
    email:string;
    address:any,
    phone:string,
    website:string,
    company:any
}

@Injectable()
export class UsersService{

    private url:string = "https://jsonplaceholder.typicode.com/users";
    constructor(private _http:Http){

    }
    getUsers(){
        return this._http.get(this.url).map(res=>res.json());
    }
}