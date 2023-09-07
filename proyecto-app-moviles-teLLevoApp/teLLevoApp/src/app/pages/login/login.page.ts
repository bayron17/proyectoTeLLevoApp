import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router:Router) { }

  user:string="";
  password:string="";

  ngOnInit() {
  }

 

  ingresar(){
    if(this.user=="usuario1" && this.password=="holamundo"){
      this.router.navigateByUrl("menu");
    }else{
      alert("usuario u contraseña incorrecta")
    }
  }

  registrarse(){
    this.router.navigateByUrl("registro-usuario");
  }

  recuperarPasword(){
    this.router.navigateByUrl("recuperar-password");

  }
}
