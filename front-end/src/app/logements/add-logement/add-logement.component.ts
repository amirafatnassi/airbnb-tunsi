import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CritereService } from "../../services/critere/critere.service";
import { OptionService } from "../../services/option/option.service";
import { SafetyItemService } from "../../services/safetyItem/safety-item.service";
import { InstallationService } from "../../services/installation/installation.service";
import { LogementService } from "../../services/logement/logement.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-logement",
  templateUrl: "./add-logement.component.html",
  styleUrls: ["./add-logement.component.scss"],
})
export class AddLogementComponent implements OnInit {
  logementFG!: FormGroup;

  logement_step = false;
  adresse_step = false;
  details_step = false;
  installation_step = false;
  critere_step = false;
  option_step = false;
  safetyItem_step = false;
  prix_step = false;
  photos_step = false;

  liste_installations: any[] = [];
  selectedInstallations: any[] = [];

  liste_criteres: any[] = [];
  selectedCriteres: any[] = [];

  liste_options: any[] = [];
  selectedOptions: any[] = [];

  liste_safetyItems: any[] = [];
  selectedSafetyItems: any[] = [];
  uploadedPhotos: any[] = [];

  step = 1;
  selectedFiles?: FileList;
  fileInfos?: Observable<any>;

  constructor(
    private logementService: LogementService,
    private installationService: InstallationService,
    private critereService: CritereService,
    private optionService: OptionService,
    private safetyItemService: SafetyItemService,
    private route: Router,
  ) {}

  ngOnInit() {
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
      prix: new FormControl(0, Validators.required),
    });

    this.listeInstallations();
    this.listeCriteres();
    this.listeOptions();
    this.listeSafetyItems();
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
    if (this.step == 9) {
      this.photos_step = true;
      if (this.uploadedPhotos.length==0) {
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
    if (this.step == 8) {
      this.prix_step = false;
    }
    if (this.step == 9) {
      this.photos_step = false;
    }
  }
  submit() {  
    if (this.step == 9) {
      this.photos_step = true;
      if (this.logementFG.get("photos")?.invalid) {
        return;
      }
    }
    let formData = new FormData();
    Object.keys(this.logementFG.value).forEach((fieldName) => {
      if (fieldName == 'adresse') {
        let adress = {
          rue:this.adresse.controls.rue.value,
          cp:this.adresse.controls.cp.value,
          num:this.adresse.controls.num.value,
          ville:this.adresse.controls.ville.value,
          pays:this.adresse.controls.pays.value
        }
        formData.append(fieldName, JSON.stringify(adress));
      } else {  
        formData.append(fieldName, this.logementFG.value[fieldName]);
      }
    });
    for (let i = 0; i < this.selectedFiles!.length; i++) {
      formData.append('photos',this.selectedFiles![i],this.selectedFiles![i].name)
    }
    this.logementService.createLogement(formData).subscribe((res: any) => {});
    this.route.navigate(["/logements"]);

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

  onSelectFile(event: any) {
    this.selectedFiles = event.target.files;   
  }
}
