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
  }
  addnewreservation(datedebut1,datefin1){
    const res:resevation={
      id:null,

      Datedebut:datedebut1,
      Datedefin:datefin1,
      ressourceId:localStorage.getItem('ressource'),


      userId:localStorage.getItem('userID')
    }
    this.dataService.addReservation(res).subscribe(data=>{
      console.log('reservation add');
      console.log(data);
    },error=>{
      console.log('error');
      console.log(error);
    })


  }


}
