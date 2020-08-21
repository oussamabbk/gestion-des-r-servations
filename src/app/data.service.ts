import { Injectable } from '@angular/core';
 import {HttpClient,HttpParams} from "@angular/common/http";
import {User} from "./user.model";
import {ressource} from "./ressource.model";
import {resevation} from "./reservation.model";
@Injectable({
  providedIn: 'root'
})
export class DataService {
    apiUrl='http://localhost:3000/user';
  constructor(private _http: HttpClient) { }


  getUser(email,password){

    return this._http.get("http://localhost:3000/user/authentification/"+email+"/"+password,{responseType: 'text'})
  }
  findID(email,password){

    return this._http.get("http://localhost:3000/user/findId/"+email+"/"+password,{responseType: 'text'})
  }
  getReservation(){
    return this._http.get<ressource[]>("http://localhost:3000/ressources");
  }
  addReservation(Reservation:resevation){
    return this._http.post<any>("http://localhost:3000/reserv",Reservation);
  }

}
