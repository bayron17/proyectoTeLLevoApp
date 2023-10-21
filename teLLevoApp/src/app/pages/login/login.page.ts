import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
import { CapacitorConfig } from '@capacitor/cli';
import { Geolocation } from '@capacitor/geolocation';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private helperService:HelperService,
              private auth:AngularFireAuth) { }

  parametroUrl:number | undefined;  

  email:string="";
  contrasena:string="";

  ngOnInit() {
    this.parametroUrl = this.activatedRoute.snapshot.params["num2"];
    this.printCurrentPosition();
  }


  printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
  
    // console.log('Current position:', coordinates);    
    await this.helperService.showToast("Su geolocalizacion es:"+ coordinates.timestamp)
  };

  async ingresar(){

    if(this.email == ""){
      this.helperService.showAlert("El email se encuentra vacio","ERROR")
      return
    }
    if(this.contrasena == ""){
      this.helperService.showAlert("La contraseña se encuentra vacia","ERROR")
    }

    try{
      let param = 27282930;
      const loader = await this.helperService.showLoading("Cargando");
      
      const req = await this.auth.signInWithEmailAndPassword(this.email,this.contrasena);
      await this.router.navigateByUrl(param + "/menu");
      await loader.dismiss();

      
    }catch(error){

    }
  }

  registrarse(){
    let variableReg = 1234
    this.router.navigateByUrl(variableReg + "/registro-usuario");
  }

  recuperarPasword(){
    let variable1 = 5678
    this.router.navigateByUrl(variable1 + "/recuperar-password");

  }

  
}
