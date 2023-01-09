import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeContratService {
  constructor(private http: HttpClient) {}

  createTypeContrat(data: any) {
    return this.http.post('http://localhost:4000/types_contrats/add', data);
  }

  getTypeContrats() {
    return this.http.get('http://localhost:4000/types_contrats');
  }

  deleteTypeContrat(id: number) {
    return this.http.delete(`http://localhost:4000/types_contrats/delete/${id}`);
  }

  getTypeContrat(id:number){
    return this.http.get('http://localhost:4000/types_contrats/show/'+id);
  }

  updateTypeContrat(id:number,data:any){
    return this.http.put('http://localhost:4000/types_contrats/update/'+id,data);
  }
}
