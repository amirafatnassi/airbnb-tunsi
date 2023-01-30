import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LogementService } from "../../services/logement/logement.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-show-logement",
  templateUrl: "./show-logement.component.html",
  styleUrls: ["./show-logement.component.scss"],
})
export class ShowLogementComponent {
  logement: any;
  logementId: any;
  constructor(
    private logementService: LogementService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.logementId = this.route.snapshot.params["id"];
    this.Monlogement();
  }

  Monlogement() {
    this.logementService.getLogement(this.logementId).subscribe((res: any) => {
      let arr = [0,0,0,0,0]
      for (let i = 0; i < res.rating ; i++) {
        arr[i]= 1
      }
      res.rating=arr;
      this.logement = res;
      //this.logement.rating=arr;
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
