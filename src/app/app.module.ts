import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponentComponent } from './authentication-component/authentication-component.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from  '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { ReservationComponent } from './reservation/reservation.component';
import {DataService} from "./data.service";
import { AddresevationComponent } from './addresevation/addresevation.component';
import { HistoriqueComponent } from './historique/historique.component';
import { UpdatereservationComponent } from './updatereservation/updatereservation.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponentComponent,
    ReservationComponent,
    AddresevationComponent,
    HistoriqueComponent,
    UpdatereservationComponent,

  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
