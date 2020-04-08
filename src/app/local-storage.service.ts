import { Injectable } from '@angular/core';
import { Utilisateur } from './models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // private currentUser: Utilisateur;

  private USER_KEY = 'id_user';
  private DOCS_KEY = 'id_documents';

  constructor() { }

  setCurrentUser(user: Utilisateur) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  getCurrentUser(): Utilisateur {
    return JSON.parse(localStorage.getItem(this.USER_KEY));
  }

}
