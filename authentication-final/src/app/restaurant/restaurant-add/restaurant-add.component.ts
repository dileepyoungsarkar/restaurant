import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';//importing the services




@Component({
  selector: 'app-restaurant-add',
  templateUrl: './restaurant-add.component.html',
  styleUrls: ['./restaurant-add.component.css']
})
export class RestaurantAddComponent implements OnInit {
  
    id: number;
    editMode = false;
    restaurantForm: FormGroup;

    constructor(private route: ActivatedRoute,
      private restaurantService: RestaurantService,
      private router: Router) {
}



  
ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
}

onSubmit() {
  // const newRestaurant = new Restaurant(// using property binding
  //   this.restaurantForm.value['name'],
  //   this.restaurantForm.value['description'],
  //   this.restaurantForm.value['imagePath'],

  if (this.editMode) {
    this.restaurantService.updateRestaurant(this.id, this.restaurantForm.value);//update the list
  } else {
    this.restaurantService.addRestaurant(this.restaurantForm.value);
  }
  this.onCancel();
}

onCancel() {
  this.router.navigate(['../'], {relativeTo: this.route});
}

private initForm() {// to include init
  let restaurantName = '';
  let restaurantImagePath = '';
  let restaurantDescription = '';
  

 

  this.restaurantForm = new FormGroup({ //adding restaurant 
    'name': new FormControl(restaurantName, Validators.required),
    'imagePath': new FormControl(restaurantImagePath, Validators.required),
    'description': new FormControl(restaurantDescription, Validators.required)
   
  });
}

}














  

  

  
