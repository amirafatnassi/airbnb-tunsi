import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SafetyItemService {
  constructor(private http: HttpClient) {}

  createSafetyItem(data: any) {
    return this.http.post('http://localhost:4000/safety_items/add', data);
  }

  getSafetyItems() {
    return this.http.get('http://localhost:4000/safety_items');
  }

  deleteSafetyItem(id: number) {
    return this.http.delete(`http://localhost:4000/safety_items/delete/${id}`);
  }

  getSafetyItem(id:number){
    return this.http.get('http://localhost:4000/safety_items/show/'+id);
  }

  updateSafetyItem(id:number,data:any){
    return this.http.put('http://localhost:4000/safety_items/update/'+id,data);
  }
}
