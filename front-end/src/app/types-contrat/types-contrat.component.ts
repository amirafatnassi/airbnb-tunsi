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
    this.dtOptions = {
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
