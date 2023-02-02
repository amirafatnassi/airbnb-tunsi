import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeLogementService } from '../../services/typeLogement/type-logement.service';

@Component({
  selector: 'app-add-type-logement',
  templateUrl: './add-type-logement.component.html',
  styleUrls: ['./add-type-logement.component.scss']
})
export class AddTypeLogementComponent {

  validForm = false;
  
  constructor(private typeLogementService: TypeLogementService) {}
  ngOnInit() {}

  typeLogementForm = new FormGroup({
    lib: new FormControl('', Validators.required)
  });

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.typeLogementForm.invalid) {
      return;
    }
    this.typeLogementService
      .createTypeLogement(this.typeLogementForm.value)
      .subscribe((res: any) => {});
  }
}
