import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {
  restaurant: Restaurant;
  id: number;
  constructor(private recipeService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router) {
}

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.restaurant = this.recipeService.getRestarant(this.id);//to show the already stored in model
      }
    );
}

}






 

  

  

 



