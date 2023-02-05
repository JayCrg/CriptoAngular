import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, query, where, setDoc, deleteDoc, doc, getDocs} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class ControlDataBaseService {

  public datosMonedas: Observable<any[]>;

  constructor(public firestore: Firestore, public auth: AuthService) {
    const datos = collection(this.firestore, "monedas");
    this.auth.checkAuthState();
    this.datosMonedas = collectionData(query(datos, where("user", "==", this.auth.userID)));
   }

  addCrypto(currency: any){
    setDoc(doc(this.firestore, 'monedas', `${currency.id}-${this.auth.userID}`), {
      userID: this.auth.userID,
      currencyID: currency.id,
    });
  }

  deleteCrypto(currency: any){
    deleteDoc(doc(this.firestore, 'monedas', `${currency}-${this.auth.userID}`));
  }
}
