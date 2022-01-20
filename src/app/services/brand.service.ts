import { ListResponseModel } from './../models/response/listResponseModel';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BrandListModel } from '../models/brandListModel';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl :string = environment.apiUrl + "brands/";

  constructor(private httpClient: HttpClient) { }

  getBrands() :Observable<ListResponseModel<BrandListModel>> {
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl+"getall")
  }
}
