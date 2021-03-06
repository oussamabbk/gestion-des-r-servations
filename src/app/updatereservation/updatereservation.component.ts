import { Component, OnInit } from '@angular/core';
import {resevation} from "../reservation.model";
import {DataService} from "../data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-updatereservation',
  templateUrl: './updatereservation.component.html',
  styleUrls: ['./updatereservation.component.css']
})
export class UpdatereservationComponent implements OnInit {

  constructor(private dataService:DataService, private _router: Router) { }

  ngOnInit(): void {
  }

  updatereservation(datedebut1,datefin1){

    this.dataService.getReservationornot(datedebut1,datefin1,localStorage.getItem('ressource'),localStorage.getItem('userID')).toPromise().then(data=>{
      console.log((data));
      if(data === 'isnotereserved'){
        const res:resevation={
          id:null,

          Datedebut:datedebut1,
          Datedefin:datefin1,
          ressourceId:localStorage.getItem('ressource'),


          userId:localStorage.getItem('userID')
        }


        if(datedebut1<datefin1){

          this.dataService.updateresevation(res).subscribe(data=>{
            console.log('reservation add');
            console.log(data);
          },error=>{
            console.log('error');

          })
        }else{
          console.log("you can't")
        }
      }else{

      }
    },error=>{
      console.log(error);
    })





  }


}
