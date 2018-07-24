import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailsComponent } from './restaurant/restaurant-details/restaurant-details.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { RestaurantItemComponent } from './restaurant/restaurant-list/restaurant-item/restaurant-item.component';
import { RestaurantService } from './restaurant/restaurant.service';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantStartComponent } from './restaurant/restaurant-start/restaurant-start.component';
import { RestaurantAddComponent } from './restaurant/restaurant-add/restaurant-add.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignComponent } from './auth/sign/sign.component';
//import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantComponent,
    RestaurantDetailsComponent,
    RestaurantListComponent,
    RestaurantItemComponent,
    RestaurantStartComponent,
    RestaurantAddComponent,
    SignComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2SearchPipeModule
    
  
  ],
  
  bootstrap: [AppComponent],
  providers: [ RestaurantService]
})
export class AppModule { }

