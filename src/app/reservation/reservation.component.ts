import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {ressource} from "../ressource.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  reservation$:ressource[];
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
    return this.dataService.getReservation().subscribe(data=> this.reservation$=data);
  }
  gotoaddreservation(id){
    localStorage.setItem('ressource',""+id);
    console.log(id);
    this._router.navigate(['/addreservation']);
  }
}
