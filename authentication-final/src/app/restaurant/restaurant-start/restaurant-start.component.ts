import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-start',
  templateUrl: './restaurant-start.component.html',
  styleUrls: ['./restaurant-start.component.css']
})
export class RestaurantStartComponent implements OnInit {

   
    name: string[] = [];
    

  constructor() { }

  ngOnInit() {
  }

}
