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
  ifreservedornot(datedebut1,datefin1):any{
    this.dataService.getReservationornot(datedebut1,datefin1,localStorage.getItem('ressource'),localStorage.getItem('userID')).toPromise().then(data=>{

        return data;



      }

    )








  }
  updatereservation(datedebut1,datefin1){

    this.ifreservedornot(datedebut1,datefin1).subscribe(data=>{
      console.log((data));
      if(data === 'isnotereserved'){

      }else{
        const res:resevation={
          id:localStorage.getItem('reservationId'),

          Datedebut:datedebut1,
          Datedefin:datefin1,
          ressourceId:localStorage.getItem('ressource'),


          userId:localStorage.getItem('userID')
        }


        if(datedebut1<datefin1){

          this.dataService.updateresevation(res).subscribe(data=>{
            console.log('reservation updated');
            console.log(data);
          },error=>{
            console.log('error');

          })
        }else{
          console.log("you can't")
        }
      }
    },error=>{
      console.log(error);
    })





  }

}
