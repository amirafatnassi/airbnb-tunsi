import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeContratService } from '../../services/typeContrat/type-contrat.service';

@Component({
  selector: 'app-add-type-contrat',
  templateUrl: './add-type-contrat.component.html',
  styleUrls: ['./add-type-contrat.component.scss']
})
export class AddTypeContratComponent {

  validForm = false;
  
  constructor(private typeContratService: TypeContratService) {}
  ngOnInit() {}

  typeContratForm = new FormGroup({
    lib: new FormControl('', Validators.required)
  });

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.typeContratForm.invalid) {
      return;
    }
    this.typeContratService
      .createTypeContrat(this.typeContratForm.value)
      .subscribe((res: any) => {});
  }
}
