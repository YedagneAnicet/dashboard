import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PiecesComponent } from './pages/pieces/pieces.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { ConnexionInscriptionComponent } from './pages/connexion-inscription/connexion-inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    PiecesComponent,
    DashboardComponent,
    ConnexionComponent,
    InscriptionComponent,
    ConnexionInscriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
