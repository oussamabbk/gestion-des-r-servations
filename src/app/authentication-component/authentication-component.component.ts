import { Component, OnInit } from '@angular/core';
import {User} from "../user.model.js";
import {DataService} from "../data.service";
import { Router } from '@angular/router';
import {SwPush, SwUpdate} from "@angular/service-worker";
@Component({
  selector: 'app-authentication-component',
  templateUrl: './authentication-component.component.html',
  styleUrls: ['./authentication-component.component.css']
})
export class AuthenticationComponentComponent implements OnInit {
  users$:User[]
  s="";
  readonly VALID_KEY= "BHDeHFsjNwrlEPnH29EQlKHD2dn1oKBEz_Z7Xz3B5I9fExcllFfLlmQ4xYsxcefY64i_KPYFT0SYPgx8CimudM4";
  constructor(private dataService:DataService, private _router: Router,private swUpdate :SwUpdate,private swPush:SwPush) { }

  ngOnInit() {


    return this.dataService.getUser("oussama.boubaker@esprit.tn","boubaker");
  }
  authentification(e,p){
    this.dataService.getUser(e,p).toPromise().then(
      data=>{
        console.log(data);
       if(data=="wrong"){
            this.s="password or email is not found";
        }if(data=="email not valid "){
          this.s="this is not an email";

        }else{
          this.dataService.findID(e,p).toPromise().then(
            data=>{
              localStorage.setItem('userID',""+data);
            }
          );

          localStorage.setItem('userToken',""+data);
          this._router.navigate(['/reservation']);

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
  subscribeToNotification(){
    if(this.swUpdate.isEnabled){
      this.swPush.requestSubscription({
        serverPublicKey:this.VALID_KEY
      })
        .then(sub=>{
          this.dataService.notification(sub).subscribe();
        })

    }



  }
  subscribeToNotifications() {

    this.swPush.requestSubscription({
      serverPublicKey: this.VALID_KEY
    })
      .then(sub => {
        console.log("notification sub :  "+sub);
        this.dataService.notification(sub).subscribe();
      })

      .catch(err => console.error("Could not subscribe to notifications", err));
  }

}
