export class ressource{
  id: string;
  Model: string;
  Refernces:string;
  platform: string;
  osversion: string;
  datedebut: Date;
  datefin:Date;
  reserve:boolean;
  userId:string;
  constructor(ressourceResponce:any) {

    this.Model=ressourceResponce.Model;
    this.Refernces=ressourceResponce.Refernces;
    this.platform=ressourceResponce.platform;
    this.osversion=ressourceResponce.numerode;
    this.datedebut=ressourceResponce.datedebut;
    this.datefin=ressourceResponce.datefin;
    this.reserve=ressourceResponce.reserve;
    this.userId=ressourceResponce.userId;
  }
}

