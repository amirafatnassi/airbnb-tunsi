import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
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
  logementFG!: FormGroup;

  logement_step = false;
  address_step = false;
  details_step = false;
  installation_step = false;
  critere_step = false;
  option_step = false;
  safetyItem_step = false;

  liste_installations: any[] = [];
  selectedInstallations: any[] = [];

  liste_criteres: any[] = [];
  selectedCriteres: any[] = [];

  liste_options: any[] = [];
  selectedOptions: any[] = [];
  
  liste_safetyItems: any[] = [];
  selectedSafetyItems: any[] = [];

  step = 1;

  constructor(
    private logementService: LogementService,
    private installationService: InstallationService,
    private critereService: CritereService,
    private optionService: OptionService,
    private safetyItemService:SafetyItemService
  ) {}

  ngOnInit() {
    this.logementFG = new FormGroup({
      logementDetails: new FormGroup({
        titre: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
      }),
      addressDetails: new FormGroup({
        rue: new FormControl("", Validators.required),
        cp: new FormControl("", Validators.required),
        num: new FormControl("", Validators.required),
        ville: new FormControl("", Validators.required),
        pays: new FormControl("", Validators.required),
      }),
      details: new FormGroup({
        nb_invites: new FormControl('', Validators.required),
        nb_chambres: new FormControl('', Validators.required),
        nb_lits: new FormControl('', Validators.required),
        nb_salledeBain: new FormControl('', Validators.required),
      }),
      installationDetails: new FormGroup({
        installations: new FormControl(this.selectedInstallations),
      }),
      critereDetails: new FormGroup({
        criteres: new FormControl(this.selectedCriteres),
      }),
      optionDetails: new FormGroup({
        options: new FormControl(this.selectedOptions),
      }),
      safetyItemDetails: new FormGroup({
        safetyItems: new FormControl(this.selectedSafetyItems),
      }),
    });

    this.listeInstallations();
    this.listeCriteres();
    this.listeOptions();
    this.listeSafetyItems();
  }

  get logement() {
    return this.logementFG.get("logementDetails") as FormGroup;
  }
  get detail() {
    return this.logementFG.get("details") as FormGroup;
  }
  get address() {
    return this.logementFG.get("addressDetails") as FormGroup;
  }
  get installations() {
    return this.logementFG.get("installationDetails") as FormGroup;
  }
  get criteres() {
    return this.logementFG.get("criteresDetails") as FormGroup;
  }
  get options() {
    return this.logementFG.get("optionsDetails") as FormGroup;
  } 
  get safetyItems() {
    return this.logementFG.get("safetyItemsDetails") as FormGroup;
  }

  next() {
    if (this.step == 1) {
      this.logement_step = true;
      if (this.logementFG.get("logementDetails")?.invalid) {
        return;
      }
    }
    if (this.step == 2) {
      this.address_step = true;

      if (this.logementFG.get("addressDetails")?.invalid) {
        return;
      }
    }
    if (this.step == 3) {
      this.details_step = true;

      if (this.logementFG.get("details")?.invalid) {
        return;
      }
    }
    if (this.step == 4) {
      this.installation_step = true;
      if (this.selectedInstallations.length == 0) {
        return;
      }
    }
    if (this.step == 5) {
      this.critere_step = true;
      if (this.selectedCriteres.length == 0) {
        return;
      }
    }
    if (this.step == 6) {
      this.option_step = true;
      if (this.selectedOptions.length == 0) {
        return;
      }
    }
    if (this.step == 7) {
      this.safetyItem_step = true;
      if (this.selectedSafetyItems.length == 0) {
        return;
      }
    }
    this.step++;
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
    if(this.step==7){
      this.safetyItem_step=false;
    }
  }
  submit() {
    console.log(this.logementFG.value);
    if (this.step == 7) {
      this.safetyItem_step = true;
      if (this.safetyItems.invalid) {
        return;
      }
    }
   
    this.logementService
      .createLogement(this.logementFG.value)
      .subscribe((res: any) => {
        console.log(res);
      });
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
  listeOptions() {
    this.optionService.getOptions().subscribe((res: any) => {
      this.liste_options = res;
    });
  }
  listeSafetyItems() {
    this.safetyItemService.getSafetyItems().subscribe((res: any) => {
      this.liste_safetyItems = res;
    });
  }
  checkInstallation(event: any, value: any) {
    if (event.target.checked) this.selectedInstallations.push(value);
    if (!event.target.checked) {
      let index = this.selectedInstallations.indexOf(value);
      if (index != -1) {
        this.selectedInstallations.splice(index, 1);
      }
    }
  }
  checkCritere(event: any, value: any) {
    if (event.target.checked) this.selectedCriteres.push(value);
    if (!event.target.checked) {
      let index = this.selectedCriteres.indexOf(value);
      if (index != -1) {
        this.selectedCriteres.splice(index, 1);
      }
    }
  }
  checkOption(event: any, value: any) {
    if (event.target.checked) this.selectedOptions.push(value);
    if (!event.target.checked) {
      let index = this.selectedOptions.indexOf(value);
      if (index != -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
  }
  checkSafetyItem(event: any, value: any) {
    if (event.target.checked) this.selectedSafetyItems.push(value);
    if (!event.target.checked) {
      let index = this.selectedSafetyItems.indexOf(value);
      if (index != -1) {
        this.selectedSafetyItems.splice(index, 1);
      }
    }
  }
}
