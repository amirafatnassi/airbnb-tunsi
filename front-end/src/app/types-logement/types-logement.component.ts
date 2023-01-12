import { Component } from "@angular/core";
import { TypeLogementService } from "../services/typeLogement/type-logement.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-types-logement",
  templateUrl: "./types-logement.component.html",
  styleUrls: ["./types-logement.component.scss"],
})
export class TypesLogementComponent {
  typesLogements: any[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(private typeLogementService: TypeLogementService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
    };
    this.typesLogementsList();
  }

  typesLogementsList() {
    this.typeLogementService.getTypeLogements().subscribe((res: any) => {
      this.typesLogements = res;
    });
  }

  suppTypeLogement(id: number) {
    Swal.fire({
      title: "Êtes-vous sûre?",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      cancelButtonColor: "btn btn-secondary",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        this.typeLogementService
          .deleteTypeLogement(id)
          .subscribe((res: any) => {
            console.log("type de logement supprimé !");
            this.ngOnInit();
          });
      }
    });
  }
}
