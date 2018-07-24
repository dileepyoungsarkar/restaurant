import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Restaurant } from './restaurant.model';


@Injectable()
export class RestaurantService {
  restaurantsChanged = new Subject<Restaurant[]>();

  private restaurants: Restaurant[] = [
    new Restaurant(
      'Indian Restaurant',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'),
      
    new Restaurant('Pop Restaurant',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
     )
  ];



  getRestaurants() {
    return this.restaurants.slice();
  }

  getRestarant(index: number) {
    return this.restaurants[index];
  }
 

  addRestaurant(restaurant: Restaurant) {
    this.restaurants.push(restaurant);
    this.restaurantsChanged.next(this.restaurants.slice());
  }



  updateRestaurant(index: number, newRestaurant: Restaurant) {
    this.restaurants[index] = newRestaurant;
    this.restaurantsChanged.next(this.restaurants.slice());
  }
  

  

 

 
}
