import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  constructor(public logeado: AuthService) { }
  ngOnInit(){
    this.logeado.checkAuthState();
    console.log(this.logeado.isLogged);
  }

  logout(){
    this.logeado.signOut();
  }

}
