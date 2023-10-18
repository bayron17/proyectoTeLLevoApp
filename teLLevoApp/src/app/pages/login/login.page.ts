import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
import { CapacitorConfig } from '@capacitor/cli';


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
    console.log("parametro: ", this.parametroUrl);
  }

  
 getCookie(name: string): string {
  const cookieName = `${name}`;
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return cookieName;
}

// Ejemplo de uso en un método
obtenerValorDeCookie():string {
  const cookieName = 'Alerta de todas las cooqies';
  const valorCookie = this.getCookie(cookieName);
  console.log('Valor de la cookie: ', valorCookie);
  return valorCookie;
}

ionViewDidEnter(){
  this.helperService.showAlert("Confirme Cokkie", this.obtenerValorDeCookie());
  // console.log("Coquies",this.obtenerValorDeCookie())
}


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
      console.log("TOKEN",await req.user?.getIdToken());
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
