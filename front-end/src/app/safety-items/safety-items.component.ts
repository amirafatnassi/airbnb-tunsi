import { Component } from "@angular/core";
import { SafetyItemService } from "../services/safetyItem/safety-item.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-safety-items",
  templateUrl: "./safety-items.component.html",
  styleUrls: ["./safety-items.component.scss"],
})
export class SafetyItemsComponent {
  safetyItems: any[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(private safetyItemService: SafetyItemService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
    };
    this.safetyItemsList();
  }

  safetyItemsList() {
    this.safetyItemService.getSafetyItems().subscribe((res: any) => {
      this.safetyItems = res;
    });
  }

  suppSafetyItem(id: number) {
    Swal.fire({
      title: "Êtes-vous sûre?",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      cancelButtonColor: "btn btn-secondary",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        this.safetyItemService.deleteSafetyItem(id).subscribe((res: any) => {
          console.log("safety item supprimé !");
          this.ngOnInit();
        });
      }
    });
  }
}
