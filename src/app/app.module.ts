import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DemandeSearchComponent } from './demande-search/demande-search.component';
import { LogoutComponent } from './logout/logout.component';
import { DemandeFormComponent } from './demande-form/demande-form.component';
import { AgentSearchComponent } from './agent-search/agent-search.component';
import { GestionnaireSearchComponent } from './gestionnaire-search/gestionnaire-search.component';
import { ReportingComponent } from './reporting/reporting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DemandeSearchComponent,
    LogoutComponent,
    DemandeFormComponent,
    AgentSearchComponent,
    GestionnaireSearchComponent,
    ReportingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
