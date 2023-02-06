import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ControlApiService{

  public listaMonedas = new Array<any>();
  public monedaSeleccionada = new Array<any>();

  constructor(private http: HttpClient) { 
    this.getList();
  }

  getList(){
    this.http.get('https://api.coingecko.com/api/v3/coins/').subscribe(
      (data:any) => {
        this.listaMonedas = data;
      }
    )
  }

  getDetail(id:string){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${id}`)
  }
}

