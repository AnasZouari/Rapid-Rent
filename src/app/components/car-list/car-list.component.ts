import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-car-list',
  imports:[CommonModule],
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  cars = [
    {
      name: 'Renault Clio',
      image: 'assets/cars/clio4.jpg',
      details: 'Automatic • 5 Seats • AC',
      price: 100
    },
    {
      name: 'Peugeot 208',
      image: 'assets/cars/peugeot208.jpg',
      details: 'Manual • 5 Seats • AC',
      price: 90
    },
    {
      name: 'Fiat 500',
      image: 'assets/cars/fiat500.jpg',
      details: 'Automatic • 4 Seats • AC',
      price: 95
    },
    {
      name: 'Volkswagen Polo',
      image: 'assets/cars/polo.jpg',
      details: 'Manual • 5 Seats • AC',
      price: 110
    },
    {
      name: 'Hyundai i20',
      image: 'assets/cars/hyundai-i20.jpg',
      details: 'Automatic • 5 Seats • AC',
      price: 105
    },
    {
      name: 'Toyota Yaris',
      image: 'assets/cars/yaris.jpg',
      details: 'Manual • 5 Seats • AC',
      price: 98
    }
  ];
}
