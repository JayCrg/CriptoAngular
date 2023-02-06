import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlApiService } from '../control-api.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {
  public datos: any;
  public id: string | null = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute, public detalle: ControlApiService) {
    if(this.id == null)
    return;
    this.detalle.getDetail(this.id).subscribe((data: any) => {
    this.datos = data;
  })
  }
}
