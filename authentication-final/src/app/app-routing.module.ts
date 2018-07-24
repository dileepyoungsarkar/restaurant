import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ RestaurantComponent} from './restaurant/restaurant.component';
import{RestaurantDetailsComponent} from './restaurant/restaurant-details/restaurant-details.component';
import{RestaurantItemComponent} from './restaurant/restaurant-list/restaurant-item/restaurant-item.component'
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantStartComponent } from './restaurant/restaurant-start/restaurant-start.component';
import { RestaurantAddComponent } from './restaurant/restaurant-add/restaurant-add.component';
import { SignComponent } from './auth/sign/sign.component';
 


const appRoutes: Routes = [
  { path: '', redirectTo: '/restaurant', pathMatch: 'full' },
  { path: 'restaurant', component: RestaurantComponent, children: [
    { path: '', component: RestaurantStartComponent },
    { path: 'new', component: RestaurantAddComponent },
    { path: ':id', component: RestaurantDetailsComponent },


  ] },
  { path: 'signin', component: SignComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}








