import { Component } from '@angular/core';
import { CritereService } from '../services/critere/critere.service';

@Component({
  selector: 'app-criteres',
  templateUrl: './criteres.component.html',
  styleUrls: ['./criteres.component.scss']
})
export class CriteresComponent {
  constructor(private critereService: CritereService) {}
  criteres :any[]=[];

  ngOnInit(): void {
    this.criteresList();
  }

  criteresList(){
    this.critereService.getCriteres().subscribe((res:any)=>{ this.criteres=res})
  }

  suppInstallation(id:number){
    this.critereService.deleteCritere(id).subscribe((res:any)=>{
      console.log('critère supprimé !');
      this.ngOnInit();
    });
  }
}

