import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResposneModel } from '../model/Car.model';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  apiUrl: string = "https://freeapi.miniprojectideas.com/api/ZoomCar/";
  loggedUserData:any;

  constructor(private http: HttpClient) { 
    const loggedData = localStorage.getItem("zoomUser");
    if(loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData); 
    }
  }

  getCarsByLocationId(locationId: number) : Observable<IApiResposneModel>{
    return this.http.get<IApiResposneModel>(this.apiUrl +"GetAllCarsByLocation?id=" +locationId)
  }

  getAllLocation(): Observable<IApiResposneModel> {
    return this.http.get<IApiResposneModel>(`${this.apiUrl}GetAllLocations`)
  }

  GetCarById(id: number): Observable<IApiResposneModel> {
    return this.http.get<IApiResposneModel>(`${this.apiUrl}GetCarById?id=${id}`)
  }
  
  saveBooking(obj: any) : Observable<IApiResposneModel>{
    return this.http.post<IApiResposneModel>(`${this.apiUrl}createNewBooking`,obj)
  }

  getBookingByCustId(id: number): Observable<IApiResposneModel> {
    return this.http.get<IApiResposneModel>(`${this.apiUrl}GetAllBookingsByCustomerId?customerid=${id}`)
  }

  
}
