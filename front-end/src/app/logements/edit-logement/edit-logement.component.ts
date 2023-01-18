import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CritereService } from "../../services/critere/critere.service";
import { OptionService } from "../../services/option/option.service";
import { SafetyItemService } from "../../services/safetyItem/safety-item.service";
import { InstallationService } from "../../services/installation/installation.service";
import { LogementService } from "../../services/logement/logement.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-logement",
  templateUrl: "./edit-logement.component.html",
  styleUrls: ["./edit-logement.component.scss"],
})
export class EditLogementComponent {
  
  logement: any;
  logementId: any;
  logementFG!: FormGroup;

  logement_step = false;
  adresse_step = false;
  details_step = false;
  installation_step = false;
  critere_step = false;
  option_step = false;
  safetyItem_step = false;
  prix_step = false;

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
    private safetyItemService: SafetyItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.logementId = this.route.snapshot.params["id"];
    this.monLogement();
    this.logementFG = new FormGroup({
      titre: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      adresse: new FormGroup({
        rue: new FormControl("", Validators.required),
        cp: new FormControl("", Validators.required),
        num: new FormControl("", Validators.required),
        ville: new FormControl("", Validators.required),
        pays: new FormControl("", Validators.required),
      }),
      nb_invites: new FormControl("", Validators.required),
      nb_chambres: new FormControl("", Validators.required),
      nb_lits: new FormControl("", Validators.required),
      nb_salledeBain: new FormControl("", Validators.required),
      installations: new FormControl(this.selectedInstallations),
      criteres: new FormControl(this.selectedCriteres),
      options: new FormControl(this.selectedOptions),
      safetyItems: new FormControl(this.selectedSafetyItems),
      prix: new FormControl("", Validators.required),
    });

    this.listeInstallations();
    this.listeCriteres();
    this.listeOptions();
    this.listeSafetyItems();
  }

  monLogement() {
    this.logementService
      .getLogement(this.logementId)
      .subscribe((res: any) => {
        this.logement = res;
        this.selectedInstallations=this.logement.installations;
        this.selectedOptions=this.logement.options;
        this.selectedCriteres=this.logement.criteres;
        this.selectedSafetyItems=this.logement.safetyItems;
        this.logementFG.patchValue(res);console.log(res);
        
      });
  }
  get adresse() {
    return this.logementFG.get("adresse") as FormGroup;
  }

  next() {
    if (this.step == 1) {
      this.logement_step = true;
      if (
        this.logementFG.get("titre")?.invalid ||
        this.logementFG.get("description")?.invalid
      ) {
        return;
      }
    }
    if (this.step == 2) {
      this.adresse_step = true;
      if (this.logementFG.get("adresse")?.invalid) {
        return;
      }
    }
    if (this.step == 3) {
      this.details_step = true;
      if (
        this.logementFG.get("nb_invites")?.invalid ||
        this.logementFG.get("nb_chambres")?.invalid ||
        this.logementFG.get("nb_lits")?.invalid ||
        this.logementFG.get("nb_salledeBain")?.invalid
      ) {
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
    if (this.step == 8) {
      this.prix_step = true;
      if (this.logementFG.get("prix")?.invalid) {
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
      this.adresse_step = false;
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
    console.log(this.logementFG.value);
    if (this.step == 8) {
      this.prix_step = true;
      if (this.logementFG.get("prix")?.invalid) {
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
