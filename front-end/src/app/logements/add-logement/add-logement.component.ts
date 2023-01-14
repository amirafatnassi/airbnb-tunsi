import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CritereService } from "../../services/critere/critere.service";
import { OptionService } from "../../services/option/option.service";
import { SafetyItemService } from "../../services/safetyItem/safety-item.service";
import { InstallationService } from "../../services/installation/installation.service";

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
  criteresDetails!: FormGroup;
  optionsDetails!: FormGroup;
  safetyItemsDetails!: FormGroup;

  logement_step = false;
  address_step = false;
  details_step = false;
  installation_step = false;
  critere_step = false;
  option_step = false;
  safetyItem_step = false;

  step = 1;

  constructor(
    private formBuilder: FormBuilder,
    private installationService: InstallationService,
    private critereService: CritereService,
    private optionService: OptionService,
    private safetyItemService: SafetyItemService
  ) {}
  liste_installations: any[] = [];
  liste_criteres: any[] = [];
  liste_options: any[] = [];
  liste_safetyItems: any[] = [];

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
    this.criteresDetails = this.formBuilder.group({
      criteres: this.formBuilder.array([]),
    });
    this.optionsDetails = this.formBuilder.group({
      options: this.formBuilder.array([]),
    });
    this.safetyItemsDetails = this.formBuilder.group({
      safetyItems: this.formBuilder.array([]),
    });

    this.listeInstallations();
    this.listeCriteres();
    this.listeOptions();
    this.listeSafetyItems();
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
  get criteres() {
    return this.criteresDetails.controls["criteres"];
  }
  get options() {
    return this.optionsDetails.controls["options"];
  }
  get safetyItems() {
    return this.safetyItemsDetails.controls["safetyItems"];
  }

  next() {
    if (this.step == 1) {
      this.logement_step = true;
      console.log("11111");
      if (this.logementDetails.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 2) {
      this.address_step = true;
      console.log("2222222");

      if (this.addressDetails.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 3) {
      this.details_step = true;
      console.log("333333");

      if (this.details.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 4) {
      this.installation_step = true;
      console.log("4444");
      if (this.installationDetails.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 5) {
      this.critere_step = true;
      if (this.criteresDetails.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 6) {
      this.option_step = true;
      if (this.optionsDetails.invalid) {
        return;
      }
      this.step++;
    }
    if (this.step == 7) {
      this.safetyItem_step = true;
      if (this.safetyItemsDetails.invalid) {
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
    if (this.step == 4) {
      this.installation_step = false;
    }
    if (this.step == 5) {
      this.critere_step = false;
    }
    if (this.step == 6) {
      this.option_step = false;
    }
    if (this.step == 7) {
      this.safetyItem_step = false;
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

  listeInstallations() {
    this.installationService.getInstallations().subscribe((res: any) => {
      this.liste_installations = res;
    });
  }
  listeCriteres() {
    this.critereService.getCriteres().subscribe((res: any) => {
      this.liste_criteres = res;
    });
  }
  listeSafetyItems() {
    this.safetyItemService.getSafetyItems().subscribe((res: any) => {
      this.liste_safetyItems = res;
    });
  }
  listeOptions() {
    this.optionService.getOptions().subscribe((res: any) => {
      this.liste_options = res;
    });
  }
}
