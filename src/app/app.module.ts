import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{OnInit} from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistroComponent } from './registro/registro.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth, Auth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortFolioComponent } from './port-folio/port-folio.component';
import { NgChartsModule } from '../../node_modules/ng2-charts';
import { TablaComponent } from './tabla/tabla.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { AuthGuard } from './guards/auth.guard';






const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MenuPrincipalComponent },
  { path: 'portfolio', component: PortFolioComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: CrearCuentaComponent},
  { path: '**', component: NotFoundComponent },
  { path: 'detalle/{id}', component: DetalleComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    MenuPrincipalComponent,
    RegistroComponent,
    DetalleComponent,
    NotFoundComponent,
    AppComponent,
    CabeceraComponent,
    PieComponent,
    PortFolioComponent,
    TablaComponent,
    CrearCuentaComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    NgbPaginationModule,
    RouterModule.forRoot(routes),
    NgChartsModule,
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
