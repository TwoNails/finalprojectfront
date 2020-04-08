import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Utilisateur } from '../models/utilisateur';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser: Utilisateur;

  constructor(
                private localStorageService: LocalStorageService
              ) { }

  ngOnInit() {
    // we set up a fake user for now, as the login & security part isn't ready yet
    let fakeUser2: Utilisateur = {
      idrh: 'PCRX976',
      lnom: 'piveteau',
      lprenom: 'olivier',
      listeRoles: ['saisie', 'gestionnaire' ], /* , 'admin' */
      idEquipe: 1
    }

    this.localStorageService.setCurrentUser(fakeUser2);

    this.currentUser = this.localStorageService.getCurrentUser();

    console.log(this.currentUser);
  }

  isUserAdmin(): boolean {
    return this.currentUser.listeRoles.includes('admin');
  }

}
