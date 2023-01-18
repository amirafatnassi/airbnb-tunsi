import { Component } from "@angular/core";
import { LogementService } from "app/services/logement/logement.service";

@Component({
  selector: "app-show-logement",
  templateUrl: "./show-logement.component.html",
  styleUrls: ["./show-logement.component.scss"],
})
export class ShowLogementComponent {
  logements: any[] = [];

  constructor(private logementService: LogementService) {}

  ngOnInit(): void {
    this.logementsList();
  }
}
