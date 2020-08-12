import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

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
  ngOnInit(): void {
  }

}
