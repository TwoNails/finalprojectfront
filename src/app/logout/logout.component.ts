import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../models/utilisateur';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  currentUser: Utilisateur;
  roles: string;
  
  constructor(
                private localStorageService: LocalStorageService 
              ) { }

  ngOnInit() {
    this.currentUser = this.localStorageService.getCurrentUser();
    this.roles = "";
    this.currentUser.listeRoles.forEach(role => {
      this.roles += ( role + ' / ');
    });
    this.roles = this.roles.substring(0, (this.roles.length-2));
    console.log(this.roles);
  }

}
