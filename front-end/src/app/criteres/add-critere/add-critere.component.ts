import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CritereService } from '../../services/critere/critere.service';

@Component({
  selector: 'app-add-critere',
  templateUrl: './add-critere.component.html',
  styleUrls: ['./add-critere.component.scss']
})
export class AddCritereComponent {

  validForm = false;
  
  constructor(private critereService: CritereService) {}
  ngOnInit() {}

  critereForm = new FormGroup({
    lib: new FormControl('', Validators.required)
  });

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.critereForm.invalid) {
      return;
    }
    this.critereService
      .createCritere(this.critereForm.value)
      .subscribe((res: any) => {});
  }
}
