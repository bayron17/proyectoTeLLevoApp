import { Inject, Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';


const key = "addUser"


@Injectable({
  providedIn: 'root'
})
export class StorageUserService {

  public Correo = "";


  constructor(@Inject(localStorage) private localStorage: StorageUserService) { }


  async obtenerItem(llave:string):Promise<string | null>{
    const item = await Preferences.get({key:llave});
    return item.value;
   }
  
   async setItem(llave:string, valor:string){
    await Preferences.set({key:llave,value:valor});
   }
  

  async obtenerUser(){
    const storageUser = await this.obtenerItem(key);

    if(storageUser == null){
      return []
    }

    const user:any[] = JSON.parse(storageUser);
    if(user){
      return user
    }else{
      return []
    }
  }

 
  async agregarUser(usuaNew:any[]){

    const usuario = await this.obtenerUser();
    for(let i of usuario){
      if(i){
        usuaNew.push(i);
      }
    }

    this.setItem(key,JSON.stringify(usuaNew));

  }

}
