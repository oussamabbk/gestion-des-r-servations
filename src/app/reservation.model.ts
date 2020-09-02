export class resevation{
  id: string;
  Datedebut: Date;
  Datedefin:Date;
  ressourceId: string;
  userId: string;

  constructor(resevationResponce:any) {
    this.id=resevationResponce._id;

    this.Datedebut=resevationResponce.Datedebut;
    this.Datedefin=resevationResponce.Datedefin;
    this.ressourceId=resevationResponce.ressourceId;
    this.userId=resevationResponce.userId;
  }
}

