import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Restaurant } from '../restaurant.model';
import { RestaurantService } from '../restaurant.service';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit, OnDestroy {
  restaurants: Restaurant[];
  subscription: Subscription;

  constructor(private restaurantService: RestaurantService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.restaurantService.restaurantsChanged
      .subscribe(
        (restaurants: Restaurant[]) => {
          this.restaurants = restaurants;
        }
      );
    this.restaurants = this.restaurantService.getRestaurants();//get restaurants
  }

  onNewRestaurant() {
    this.router.navigate(['new'], {relativeTo: this.route});// add new restaurant
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}








