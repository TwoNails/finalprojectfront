export class DemandeDTO {

    public constructor(init?: Partial<DemandeDTO>){
      Object.assign(this, init);
    }
  
    idrh: string;						// Identifiant RH de l'agent concerné par la demande
    codeType: string;                   // Décris la catégorie de la demande
    objet: string;                      // Décris l'objet de la demande
    origine: string;                    // Décris l'origine de la demande (batch, mail, courrier, telephone)
    matriculeGestionnaire: string;      // OPTIONNEL : Identifiant RH du gestionaire qui s'attribue la demande
    listeDocuments: Array<String>;	    // Pieces jointes (remplacer String)
  
  }
  





/*
public class DemandeDTO {
		
		// idrh de l'agent concerné par la demande
		private String idrh;
		
		// libellé du type de la demande. Permettra de décrire et le type et la nature de la demande
		private String codeType;
		
		private String objet;
		
		private String origine;
		
		// matricule du gestionnaire a qui est attribuée la demande. optionnel
		private String matriculeGestionnaire;
		
		// liste des pieces jointes à la demande
		private Set<AttachedDocument> listeDocuments;

*/