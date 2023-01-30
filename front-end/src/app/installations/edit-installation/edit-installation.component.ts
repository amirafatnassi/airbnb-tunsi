import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { InstallationService } from "../../services/installation/installation.service";

@Component({
  selector: "app-edit-installation",
  templateUrl: "./edit-installation.component.html",
  styleUrls: ["./edit-installation.component.scss"],
})
export class EditInstallationComponent {
  validForm= false;
  installation: any;
  installationId: any;
  installationForm = new FormGroup({
    lib: new FormControl(""),
  });

  constructor(
    private installationService: InstallationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.installationId = this.route.snapshot.params["id"];
    this.myInstallation();
  }

  myInstallation() {
    this.installationService
      .getInstallation(this.installationId)
      .subscribe((res: any) => {
        this.installation = res;
        this.installationForm.patchValue(res);
      });
  }

  update() {
    this.validForm = true;
    if (this.installationForm.invalid) {
      return;
    }

    this.installationService
      .updateInstallation(this.installationId, this.installationForm.value)
      .subscribe((res: any) => {
        this.ngOnInit();
      });
  }
}
