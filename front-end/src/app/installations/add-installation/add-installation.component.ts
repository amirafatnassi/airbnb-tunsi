import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InstallationService } from '../../services/installation/installation.service';

@Component({
  selector: 'app-add-installation',
  templateUrl: './add-installation.component.html',
  styleUrls: ['./add-installation.component.scss']
})
export class AddInstallationComponent {

  validForm = false;
  
  constructor(private installationService: InstallationService) {}
  ngOnInit() {}

  installationForm = new FormGroup({
    lib: new FormControl('', Validators.required)
  });

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.installationForm.invalid) {
      return;
    }
    this.installationService
      .createInstallation(this.installationForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
