import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { LogementService } from "../../services/logement/logement.service";

@Component({
  selector: "app-add-logement",
  templateUrl: "./add-logement.component.html",
  styleUrls: ["./add-logement.component.scss"],
})
export class AddLogementComponent {
  logementDetails!: FormGroup;
  addressDetails!: FormGroup;
  details!: FormGroup;
  installationDetails!: FormGroup;
  logement_step = false;
  address_step = false;
  details_step = false;
  installation_step = false;
  step = 1;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.logementDetails = this.formBuilder.group({
      titre: ["", Validators.required],
      description: ["", Validators.required],
    });
    this.addressDetails = this.formBuilder.group({
      rue: ["", Validators.required],
      cp: ["", Validators.required],
      num: ["", Validators.required],
      ville: ["", Validators.required],
      pays: ["", Validators.required],
    });
    this.details = this.formBuilder.group({
      nb_invites: ["", Validators.required],
      nb_chambres: ["", Validators.required],
      nb_lits: ["", Validators.required],
      nb_salledeBain: ["", Validators.required],
    });
    this.installationDetails = this.formBuilder.group({
      installations: this.formBuilder.array([]),
    });
  }
  get logement() {
    return this.logementDetails.controls;
  }
  get detail() {
    return this.details.controls;
  }
  get address() {
    return this.addressDetails.controls;
  }
  get installations() {
    return this.installationDetails.controls["installations"];
  }

  next() {
    if (this.step == 1) {
      this.logement_step = true;
      if (this.logementDetails.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 3) {
      this.details_step = true;
      if (this.details.invalid) {
        return;
      }
      this.step++;
    }
  }
  previous() {
    this.step--;
    if (this.step == 1) {
      this.logement_step = false;
    }
    if (this.step == 2) {
      this.address_step = false;
    }
    if (this.step == 3) {
      this.details_step = false;
    }
  }
  submit() {
    if (this.step == 4) {
      this.installation_step = true;
      if (this.installations.invalid) {
        return;
      }
    }
  }
}
