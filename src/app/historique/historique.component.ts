import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";

import {resevation} from "../reservation.model";
import {ressource} from "../ressource.model";


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  reservation$:resevation[];
  historique$:ressource[];

  constructor(private dataService:DataService, private _router: Router) { }
  burger(){
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
  }
  quit(){
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 32px 32px';
    links.style.display = 'none';
    quit.style.display = 'none';
  }
  ngOnInit() {
    console.log(this.dataService.getReservation());
    return this.dataService.gethistorique(localStorage.getItem('userID')).subscribe(data=> {
      this.reservation$=data

      console.log(data);
    });

  }
  getressourcewithId(ressourceID){
    return this.dataService.getressourceswithID(ressourceID).subscribe(data=>{
      this.historique$=data;
    });

  }
  goToUpdate(Id){
    console.log(Id);
    localStorage.setItem('reservationId',""+Id);
    //this._router.navigate(['/reservation']);

  }

}
