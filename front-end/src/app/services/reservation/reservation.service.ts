import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  createReservation(data: any) {
    return this.http.post('http://localhost:4000/reservations/add', data);
  }

  getReservations() {
    return this.http.get('http://localhost:4000/reservations');
  }

  deleteReservation(id: number) {
    return this.http.delete(`http://localhost:4000/reservations/delete/${id}`);
  }

  getReservation(id:number){
    return this.http.get('http://localhost:4000/reservations/show/'+id);
  }

  updateReservation(id:number,data:any){
    return this.http.put('http://localhost:4000/reservations/update/'+id,data);
  }
}
