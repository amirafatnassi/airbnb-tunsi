import { Component } from '@angular/core';
import { TypeLogementService } from '../services/typeLogement/type-logement.service';

@Component({
  selector: 'app-types-logement',
  templateUrl: './types-logement.component.html',
  styleUrls: ['./types-logement.component.scss']
})
export class TypesLogementComponent {
  constructor(private typeLogementService: TypeLogementService) {}
  typesLogements :any[]=[];

  ngOnInit(): void {
    this.typesLogementsList();
  }

  typesLogementsList(){
    this.typeLogementService.getTypeLogements().subscribe((res:any)=>{ this.typesLogements=res})
  }

  suppInstallation(id:number){
    this.typeLogementService.deleteTypeLogement(id).subscribe((res:any)=>{
      console.log('type de logement supprimé !');
      this.ngOnInit();
    });
  }
}