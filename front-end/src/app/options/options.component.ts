import { Component } from '@angular/core';
import { OptionService } from '../services/option/option.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  options :any[]=[];
  dtOptions: DataTables.Settings = {};
  
  constructor(private optionService: OptionService) {}

  ngOnInit(): void {
    this.optionsList();console.log('inint');
    this.dtOptions = {  language: {
      processing: "Traitement en cours...",
      search: "Rechercher&nbsp;:",
      lengthMenu: "Afficher _MENU_ &eacute;l&eacute;ments",
      info: "Affichage de l'&eacute;lement _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
      infoEmpty:
        "Affichage de l'&eacute;lement 0 &agrave; 0 sur 0 &eacute;l&eacute;ments",
      infoFiltered:
        "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
      infoPostFix: "",
      loadingRecords: "Chargement en cours...",
      zeroRecords: "Aucun &eacute;l&eacute;ment &agrave; afficher",
      emptyTable: "Aucune donnée disponible dans le tableau",
      paginate: {
        first: "Premier",
        previous: "Pr&eacute;c&eacute;dent",
        next: "Suivant",
        last: "Dernier",
      },
      aria: {
        sortAscending: ": activer pour trier la colonne par ordre croissant",
        sortDescending:
          ": activer pour trier la colonne par ordre décroissant",
      },
    },
      pagingType: 'full_numbers'
    };    
  }

  optionsList(){
    this.optionService.getOptions().subscribe((res:any)=>{ console.log('rrrr');this.options=res ;
    })
  }

  suppOption(id:number){
    this.optionService.deleteOption(id).subscribe((res:any)=>{
      console.log('option deleted !');
      this.ngOnInit();
    });
  }
}