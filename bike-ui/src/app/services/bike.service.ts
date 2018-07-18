import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private restangular: Restangular) { }

  getBikes(){
    let token = localStorage.getItem('access_token');
    return this.restangular.all('bikes').getList({}, {'Authorization': 'Bearer ' + token});
  }

  getBike(id: number){
    let token = localStorage.getItem('access_token');
    return this.restangular.one('bikes', id).get({}, {'Authorization': 'Bearer ' + token});
  }

  createBikeRegistration(bike){
    return this.restangular.all('bikes').post(bike);
  }
}
