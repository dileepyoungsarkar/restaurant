/*import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';


import { Restaurant } from '../restaurant/restaurant.model';
import { RestaurantService } from '../restaurant/restaurant.service';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {
  constructor(private http: Http,
             // private restaurantService: restaurantService,
              private authService: AuthService) {
  }

  

  getRestaurants() {
  //  const token = this.authService.getToken();

    this.http.get('https://demo9020553.mockable.io/login')
      .map(
        (response: Response) => {
          const restaurants: Restaurant[] = response.json();
          
      
    }
)
}
}*/
