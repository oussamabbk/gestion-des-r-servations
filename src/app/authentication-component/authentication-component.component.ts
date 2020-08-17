import { Component, OnInit } from '@angular/core';
import {User} from "../user.model.js";
import {DataService} from "../data.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentication-component',
  templateUrl: './authentication-component.component.html',
  styleUrls: ['./authentication-component.component.css']
})
export class AuthenticationComponentComponent implements OnInit {
  users$:User[]
  s="";
  constructor(private dataService:DataService, private _router: Router) { }

  ngOnInit() {


    return this.dataService.getUser("oussama.boubaker@esprit.tn","boubaker");
  }
  authentification(e,p){
    this.dataService.getUser(e,p).toPromise().then(
      data=>{
        console.log(data);
        if (data=="login succes"){
          this._router.navigate(['/reservation']);

        }if(data=="no fucked login"){
            this.s="password or email is not found";
        }if(data=="email not valid "){
          this.s="this is not an email";

        }
      }
    )
    console.log(this.dataService.getUser(e,p))
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
