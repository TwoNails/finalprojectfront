import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demande-search',
  templateUrl: './demande-search.component.html',
  styleUrls: ['./demande-search.component.scss']
})
export class DemandeSearchComponent implements OnInit {

  showForm: boolean;

  // il faut absolument que je déplace le formulaire de création dans un autre composant, ca va etre un bordel innommable 
  form: FormGroup;  // contiens un formulaire à plusieurs champs (à définir, d'habitude en y ajoutant plusieurs FormControl)

  constructor(
    private fb: FormBuilder,  // Faudra que j'aille lire la doc mais ça a l'air de permettre de rapidement structurer des FormControl
                              // (la brique de base) pour en faire des formulaires plus complexes (à plusieurs champs notamment)
              ) { }

  ngOnInit() {
    this.showForm = false;
    this.form = this.fb.group({             // Grace a FormBuilder, on peut construire ce formulaire en un seul bloc de code,
    });
  }

  toggleShowForm(){
    this.showForm = !this.showForm;
  }

  // il faut absolument que je déplace le formulaire de création dans un autre composant, ca va etre un bordel innommable 
  onSubmit() {
    if (this.form.valid) {
      //this.attemptRegistration();
    }
    // this.formSubmitAttempt = true;             // Informe la fonction isFieldInvalid que l'utilisateur a tenté de submit
  }

}
