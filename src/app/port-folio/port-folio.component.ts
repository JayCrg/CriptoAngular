import { Component } from '@angular/core';
import { ControlApiService } from '../control-api.service';
import { ControlDataBaseService } from '../control-data-base.service';
import { AuthService} from '../auth.service';


@Component({
  selector: 'app-port-folio',
  templateUrl: './port-folio.component.html',
  styleUrls: ['./port-folio.component.css'],
  
})
export class PortFolioComponent {
  page=1;
  pageSize=10;
  
  constructor(public pruebaServicio: ControlApiService, public dataBaseServicio: ControlDataBaseService, public logeado: AuthService) { }

  cambiarPagina(pagina: number){
    this.page = pagina;
  }
  marcarFavorito(coin: any){
    this.dataBaseServicio.añade(coin);
  }
}
