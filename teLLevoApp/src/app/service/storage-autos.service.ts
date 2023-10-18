import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

const key = "addCar";

@Injectable({
  providedIn: 'root'
})
export class StorageAutosService {

  constructor() { }

 async obtenerItem(llave:string):Promise<string | null>{
  const item = await Preferences.get({key:llave});
  return item.value;
 }

 async setItem(llave:string, valor:string){
  await Preferences.set({key:llave,value:valor});
 }

 async obtenerAuto(){
  const storageAuto = await this.obtenerItem(key);
  if (storageAuto == null){
   return []
  }

  const veh:any[] = JSON.parse(storageAuto);
  if(veh){
    return veh;
  }else{
    return [];
  }
 }

 async agregarVehiculo(vehicu:any[]){
  const vehiculo = await this.obtenerAuto();
    for(let i of vehiculo){
      if(i){
        vehicu.push(i);
      }
    }

    this.setItem(key,JSON.stringify(vehicu));
 }

}
