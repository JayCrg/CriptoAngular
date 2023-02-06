import { Component } from '@angular/core';
import { ControlDataBaseService } from '../control-data-base.service';
import { ControlApiService } from '../control-api.service';


@Component({
  selector: 'app-mis-monedas',
  templateUrl: './mis-monedas.component.html',
  styleUrls: ['./mis-monedas.component.css']
})
export class MisMonedasComponent {

  public datos = new Array<any>();
  
  constructor(public dataBaseService: ControlDataBaseService, public apiService: ControlApiService) { 
    this.dataBaseService.build
    this.getMoreInfoChosen();
  }

  getMoreInfoChosen(){
    this.dataBaseService.datosMonedas.forEach((element) => {
      element.forEach((element2) => {
        this.apiService.getDetail(element2.coin).subscribe((data:any) => {
          if(this.datos.find((data2:any) => data2.id == data.id))
          return;
          this.datos.push(data);
        })
      })
    });
  }
  
  borrar(coin: any){
    this.dataBaseService.borra(coin);
    this.datos = this.datos.filter((data:any) => data.id != coin);
  }

  // intervalo = setInterval(() => {
  //   this.getMoreInfoChosen()
  //   console.log("hola");
  //   }, 5000);
}
