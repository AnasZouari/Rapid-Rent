import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { ICarList, IApiResposneModel } from '../../model/Car.model';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  currentLocationId: number = 0;
  locationService = inject(LocationService);
  routerSrv = inject(Router);
  carList: ICarList [] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((param:any)=> {
      debugger;
      this.currentLocationId = param.locationId;
      this.getCarsByLocation();
    })
  }

  getCarsByLocation() {
    this.locationService.getCarsByLocationId(this.currentLocationId).subscribe((Res:IApiResposneModel)=>{
      this.carList = Res.data;
    })
  }

  navigateToBooking(carId: number) {
    this.routerSrv.navigate(['/booking',carId])
  }



}
