import { Component } from "@angular/core";
import { TypeContratService } from "../services/typeContrat/type-contrat.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-types-contrat",
  templateUrl: "./types-contrat.component.html",
  styleUrls: ["./types-contrat.component.scss"],
})
export class TypesContratComponent {
  typesContrat: any[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(private typeContratService: TypeContratService) {}

  ngOnInit(): void {
    this.dtOptions = {  language: {
      processing: "Traitement en cours...",
      search: "Rechercher&nbsp;:",
      lengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
      info: "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
      infoEmpty:
        "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
      infoFiltered:
        "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
      infoPostFix: "",
      loadingRecords: "Chargement en cours...",
      zeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
      emptyTable: "Aucune donnée disponible dans le tableau",
      paginate: {
        first: "Premier",
        previous: "Pr&eacute;c&eacute;dent",
        next: "Suivant",
        last: "Dernier",
      },
      aria: {
        sortAscending: ": activer pour trier la colonne par ordre croissant",
        sortDescending:
          ": activer pour trier la colonne par ordre décroissant",
      },
    },
      pagingType: "full_numbers",
    };
    this.typesContratList();
  }

  typesContratList() {
    this.typeContratService.getTypeContrats().subscribe((res: any) => {
      this.typesContrat = res;
    });
  }

  suppTypeContrat(id: number) {
    Swal.fire({
      title: "Êtes-vous sûre?",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      cancelButtonColor: "btn btn-secondary",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        this.typeContratService.deleteTypeContrat(id).subscribe((res: any) => {
          console.log("Type de contrat supprimé !");
          this.ngOnInit();
        });
      }
    });
  }
}
