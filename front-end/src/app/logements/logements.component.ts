import { Component } from '@angular/core';
import { LogementService } from '../services/logement/logement.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.scss']
})
export class LogementsComponent {
  logements: any[] = [];
  dtOptions: DataTables.Settings = {};
  cropWidth = 75;

  constructor(private logementService: LogementService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: "full_numbers",
      scrollY:700,
      scrollX:true,
      pageLength:5,
      lengthMenu:[5,10,25,50]
    };
    this.logementsList();
  }

  logementsList() {
    this.logementService.getLogements().subscribe((res: any) => {
      this.logements = res;
    });
  }

  suppLogement(id: number) {
    Swal.fire({
      title: "Êtes-vous sûre?",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      cancelButtonColor: "btn btn-secondary",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        this.logementService
          .deleteLogement(id)
          .subscribe((res: any) => {
            this.ngOnInit();
            console.log("Logement supprimé !");
          });
      }
    });
  }
}
