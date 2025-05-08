import { Component } from '@angular/core';
import { CarListComponent } from "../../components/car-list/car-list.component";

@Component({
  selector: 'app-home',
  imports: [CarListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
