import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LogementService } from "../../services/logement/logement.service";

@Component({
  selector: "app-show-logement",
  templateUrl: "./show-logement.component.html",
  styleUrls: ["./show-logement.component.scss"],
})
export class ShowLogementComponent {
  logement: any;
  logementId: any;
  emptyStars = 5;
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
      this.logement = res;

      this.logement.rating=arr;
      console.log(res);
    });
  }
}
