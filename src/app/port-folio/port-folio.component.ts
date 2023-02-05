import { Component } from '@angular/core';
import {AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlApiService } from '../control-api.service';

@Component({
  selector: 'app-port-folio',
  templateUrl: './port-folio.component.html',
  styleUrls: ['./port-folio.component.css'],
  
})
export class PortFolioComponent {
  page=1;
  pageSize=10;
  
  constructor(public pruebaServicio: ControlApiService ) { }

  cambiarPagina(pagina: number){
    this.page = pagina;
  }
}
