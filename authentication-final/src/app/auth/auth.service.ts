/*import { Router } from '@angular/router';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as mockable from 'mockable';// here mockale import is not working


//var mock = require('mock-require');
 
//mock('http', { request: function() {
  //console.log('http.request called');
//}});
 
//var http = require('http');
//http.request(); // 'http.request called'

//mock('fs', 'path');
//require('fs') === require('path');

@Injectable()
export class AuthService {
  token: string;

  constructor(private router: Router) {}

  

  signinUser(username: string, password: string) {
    mockable.auth().signInWithUsernameAndPassword(username, password)
      .then(
        response => {
          this.router.navigate(['/']);
         
        }
      )
      .catch(
        error => console.log(error)
      );
  }
  isAuthenticated() {
    return this.token != null;
  }

  
}*/
