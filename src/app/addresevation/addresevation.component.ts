import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Router} from "@angular/router";
import {ressource} from "../ressource.model";
import {resevation} from "../reservation.model";

@Component({
  selector: 'app-addresevation',
  templateUrl: './addresevation.component.html',
  styleUrls: ['./addresevation.component.css']
})
export class AddresevationComponent implements OnInit {

  constructor(private dataService:DataService, private _router: Router) { }

  ngOnInit() {
    let verif="";

  }
  ifreservedornot(datedebut1,datefin1):any{
    this.dataService.getReservationornot(datedebut1,datefin1,localStorage.getItem('ressource'),localStorage.getItem('userID')).toPromise().then(data=>{
        console.log(data);
        return data;



      }

    )








  }
  addnewreservation(datedebut1,datefin1){

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

          this.dataService.addReservation(res).subscribe(data=>{
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
