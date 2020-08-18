import { Injectable } from '@angular/core';
 import {HttpClient,HttpParams} from "@angular/common/http";
import {User} from "./user.model";
@Injectable({
  providedIn: 'root'
})
export class DataService {
    apiUrl='http://localhost:3000/user';
  constructor(private _http: HttpClient) { }


  getUser(email,password){

    return this._http.get("http://localhost:3000/user/authentification/"+email+"/"+password,{responseType: 'text'})
  }
  getReservation(){
    return this._http.get("http://localhost:3000/reservation",{responseType: 'text'})
  }
}
