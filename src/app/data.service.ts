import { Injectable } from '@angular/core';
 import {HttpClient,HttpParams} from "@angular/common/http";
import {User} from "./user.model";
import {ressource} from "./ressource.model";
import {resevation} from "./reservation.model";
import {Subscription} from "rxjs";
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
  getReservationornot(datedebut,datefin,userId,ressourceID){
    return this._http.get("http://localhost:3000/reserv/reservedornot/"+datedebut+"/"+datefin+"/"+userId+"/"+ressourceID,{responseType: 'text'})
  }
  gethistorique(userID){
    return this._http.get<resevation[]>("http://localhost:3000/reserv/historique/"+userID);
  }
  getressourceswithID(ressourceID){
    return this._http.get<ressource[]>("http://localhost:3000/ressources/singleressource/"+ressourceID);
  }
  public notification(sub: PushSubscription){
    return this._http.post<any>("http://localhost:3000/reserv",sub);

  }
  updateresevation(Reservation:resevation){

    return this._http.put<any>("http://localhost:3000/reserv/update",Reservation);

  }
  Deletereservation(Id:string){

    return this._http.delete<any>("http://localhost:3000/reserv/"+Id);

  }

}
