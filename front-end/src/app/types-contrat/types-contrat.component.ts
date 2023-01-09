import { Component } from '@angular/core';
import { TypeContratService } from '../services/typeContrat/type-contrat.service';

@Component({
  selector: 'app-types-contrat',
  templateUrl: './types-contrat.component.html',
  styleUrls: ['./types-contrat.component.scss']
})
export class TypesContratComponent {
  constructor(private typeContratService: TypeContratService) {}
  typesContrat :any[]=[];

  ngOnInit(): void {
    this.typesContratList();
  }

  typesContratList(){
    this.typeContratService.getTypeContrats().subscribe((res:any)=>{ this.typesContrat=res})
  }

  suppInstallation(id:number){
    this.typeContratService.deleteTypeContrat(id).subscribe((res:any)=>{
      console.log('installation deleted !');
      this.ngOnInit();
    });
  }
}

