import { Component } from "@angular/core";
import { InstallationService } from "../services/installation/installation.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-installations",
  templateUrl: "./installations.component.html",
  styleUrls: ["./installations.component.scss"],
})
export class InstallationsComponent {
  constructor(private installationService: InstallationService) {}
  installations: any[] = [];
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
     this.dtOptions = {
      pagingType: 'full_numbers',
      scrollY:400,
      pageLength:5,
      lengthMenu:[5,10,25,50],
      // responsive:true
    };

    this.installationsList();
  }

  installationsList() {
    this.installationService.getInstallations().subscribe((res: any) => {
      this.installations = res;
    });
  }

  suppInstallation(id: number) {
    Swal.fire({
      title: "Êtes-vous sûre?",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      cancelButtonColor: "btn btn-secondary",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        this.installationService
          .deleteInstallation(id)
          .subscribe((res: any) => {
            console.log("installation supprimé !");
            this.ngOnInit();
          });
      }
    });
  }
}