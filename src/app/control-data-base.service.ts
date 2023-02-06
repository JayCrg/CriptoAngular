import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where, setDoc, deleteDoc, doc, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})

export class ControlDataBaseService {

public datosMonedas: Observable<any[]> = new Observable<any[]>();

  constructor(public firestore: Firestore, public auth: AuthService) {
    this.auth.checkAuthState();
    this.build();
  }
  
  build(){
    const datos = collection(this.firestore, "monedas");
    this.datosMonedas = collectionData(query(datos, where("user", "==", this.auth.userID)));
    console.log(this.auth.userID);
   }

   borra(coin: any){
     deleteDoc(doc(this.firestore, 'monedas', `${coin}-${this.auth.userID}`));
   }

   añade(coin: any){
     this.datosMonedas.forEach(element => {
        element.forEach(element2 => {
          if(element2.coin === coin){
            return;
          }
        });
      });
      setDoc(doc(this.firestore, 'monedas', `${coin}-${this.auth.userID}`), {
        coin: coin,
        user: this.auth.userID,
      });
  }

}

//como hacer un delete por dos campos!!!
