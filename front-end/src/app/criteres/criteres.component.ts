import { Component } from '@angular/core';
import { CritereService } from '../services/critere/critere.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-criteres',
  templateUrl: './criteres.component.html',
  styleUrls: ['./criteres.component.scss']
})
export class CriteresComponent {
  criteres :any[]=[];
  dtOptions: DataTables.Settings = {};
  
  constructor(private critereService: CritereService) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.criteresList();
  }

  criteresList(){
    this.critereService.getCriteres().subscribe((res:any)=>{ this.criteres=res})
  }

  suppCritere(id:number){
    Swal.fire({
      title: "Êtes-vous sûre?",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      cancelButtonColor: "btn btn-secondary",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {      
        this.critereService.deleteCritere(id).subscribe((res:any)=>{
          console.log('critère supprimé !');
          this.ngOnInit();
        });
      }
    });
    
  }
  
}

