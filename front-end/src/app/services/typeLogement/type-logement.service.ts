import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeLogementService {

  constructor(private http: HttpClient) {}

  createTypeLogement(data: any) {
    return this.http.post('http://localhost:4000/types_logements/add', data);
  }

  getTypeLogements() {
    return this.http.get('http://localhost:4000/types_logements');
  }

  deleteTypeLogement(id: number) {
    return this.http.delete(`http://localhost:4000/types_logements/delete/${id}`);
  }

  getTypeLogement(id:number){
    return this.http.get('http://localhost:4000/types_logements/show/'+id);
  }

  updateTypeLogement(id:number,data:any){
    return this.http.put('http://localhost:4000/types_logements/update/'+id,data);
  }
}
