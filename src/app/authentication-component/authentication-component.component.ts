import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-component',
  templateUrl: './authentication-component.component.html',
  styleUrls: ['./authentication-component.component.css']
})
export class AuthenticationComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   burger(){
    var burger = document.getElementById('burger');
    var links = document.getElementById('links');
    var quit = document.getElementById('quit');
    burger.style.padding = '16px 16px 200vw 200vw';
    links.style.display = 'flex';
    quit.style.display = 'inline';
  }

}
