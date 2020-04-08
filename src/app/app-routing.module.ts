import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemandeSearchComponent } from './demande-search/demande-search.component';
import { DemandeFormComponent } from './demande-form/demande-form.component';
import { AgentSearchComponent } from './agent-search/agent-search.component';
import { GestionnaireSearchComponent } from './gestionnaire-search/gestionnaire-search.component';
import { ReportingComponent } from './reporting/reporting.component';


const routes: Routes = [
  { path: 'demandes', component: DemandeSearchComponent },
  { path: 'agents', component: AgentSearchComponent },
  { path: 'gestionnaires', component: GestionnaireSearchComponent },
  { path: 'reportings', component: ReportingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
