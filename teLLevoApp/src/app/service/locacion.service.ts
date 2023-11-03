// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { lastValueFrom } from 'rxjs';
// import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Region } from '../models/region';
import { apiResponse } from '../models/apiResponse';

@Injectable({
  providedIn: 'root'
})
export class LocacionService {

  constructor(private http:HttpClient) { }

  async obtenerRegion(){
    return await lastValueFrom(this.http.get<apiResponse<Region>>(`${environment.apiurl}region`));
  }

  async obtenerComuna(regionId:number){
    return await lastValueFrom(this.http.get<apiResponse<Region>>(`${environment.apiurl}comuna/` + regionId));
  }
}
