import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ControlApiService{

  public listaMonedas = new Array<any>();
  public monedaSeleccionada = new Array<any>();

  constructor(private http: HttpClient) { 
    // this.getList();
  }

  ngOnInit(){
    this.http.get('https://api.coingecko.com/api/v3/coins/list').subscribe(
      (data:any) => {
        this.listaMonedas = data;
        console.log(data);
      }
    )
  }

  getDetail(id:string){
    this.http.get(`https://api.coingecko.com/api/v3/coins/${id}`).subscribe(
      (data:any) => {
        this.monedaSeleccionada = data;
        console.log(data);
      }
    )
  }
}

