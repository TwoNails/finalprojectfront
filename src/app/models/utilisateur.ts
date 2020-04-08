export class Utilisateur {

  public constructor(init?: Partial<Utilisateur>){
    Object.assign(this, init);
  }

  idrh: string;						// Identifiant RH de l'utilisateur
  lnom: string;
  lprenom: string;
  listeRoles:Array<String>;			// Roles (autorisations)
  idEquipe: number;					// Equipe à laquelle appartient l'utilisateur (sert notamment pour les reporting)

}



/*
@Entity
@Table(name = "UTILISATEUR")
public class Utilisateur {
	
	@Id
	@Column(name = "ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "CMATRICULE", nullable = false, length = 7)
	private String identifiantRH;
	
	@Column(name = "LNOM", nullable = false, length = 40)
	private String nom;
	
	@Column(name = "LPRENOM", nullable = false, length = 30)
	private String prenom;
	
	@ElementCollection
	@CollectionTable(
			name = "tableProfilsUtilisateur",
			joinColumns = @JoinColumn(name = "id_utilisateur")
	)
	@Column(name = "ProfilId")
    private List<ProfilUtilisateur> roles = new ArrayList<>();
*/ 