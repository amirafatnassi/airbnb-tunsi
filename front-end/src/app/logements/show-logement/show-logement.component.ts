import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LogementService } from "../../services/logement/logement.service";

@Component({
  selector: "app-show-logement",
  templateUrl: "./show-logement.component.html",
  styleUrls: ["./show-logement.component.scss"],
})
export class ShowLogementComponent {
  logement: any={};
  logementId: any;
  constructor(private logementService: LogementService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.logementId = this.route.snapshot.params['id'];
    this.Monlogement();
  }

  Monlogement() {
    this.logementService.getLogement(this.logementId).subscribe((res: any) => {
      this.logement = res;
      console.log(res);
    });
  }
}
