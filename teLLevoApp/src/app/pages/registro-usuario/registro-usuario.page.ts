import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocacionService } from 'src/app/service/locacion.service';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';
import { StorageUserService } from 'src/app/service/storage-user.service';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  regiones:Region[] = [];
  comunas:Comuna[] = [];

  email:string = " ";
  contrasena:string = " ";
  regionSeleccionado:number = 0;
  comunaSeleccionada:number = 0;
  user:string = "";
  nombreCom:string = "";

  valiCamposVacidos:any;
  valiNom:string='';
  valiUser:string='';
  valiEmail:string='';
  valiPassword:string='';

  constructor(private router:Router,
              private auth:AngularFireAuth,
              private activatedRoute:ActivatedRoute,
              private helper:HelperService,
              private locationService:LocacionService,
              private storgeUser:StorageUserService     
              ) { }

  parametroUrl:number | undefined;  

  ngOnInit() {
    this.parametroUrl = this.activatedRoute.snapshot.params["num2"];
    this.cargarRegion();
  }

  logOut(){
    this.router.navigateByUrl("login");
  }

  async cargarRegion(){
    const req = await this.locationService.obtenerRegion();
    this.regiones = req.data;    
  }

  async cargarComuna(){
    const req = await this.locationService.obtenerComuna(this.regionSeleccionado);
    this.comunas = req.data;
  }

  validarNom(){
    if(this.nombreCom.length <= 6){
      this.valiNom = "Nombre no permitido "
      this.nombreCom = ""
    }else{
      this.valiNom = "";
    }
  }

  validarEmail(){
 // explicacion de validacion con /^ abrimos la cadena de texto que debe contener con [a-zA-Z0-9._] indicamos los caracteres que puede tener antes de el +@+ a continuacion indicaremos la cadena [a-zA-Z0-9.-] para que permita ingresar los tipos letras mayusculas y minuscula
    const validacion =/^[a-zA-Z0-9._]+@+[a-zA-Z]+\.com$/;
    if(validacion.test(this.email)){
      this.valiEmail = "";
    }else{
      this.valiEmail = "email no permitido"
      this.email = ""
    }
  }
  validarUser(){
    if(this.user.length <= 6){
      this.valiUser = "Usuario no permitido "
      this.user = ""
    }else{
      this.valiUser = "";
    }
  }

  validarPassword(){
    if(this.contrasena.length <= 5){
      this.valiPassword = "Contraseña no valida "
      this.contrasena = ""
    }else{
      this.valiPassword = "";
    }
  }

  async registro(){
    this.validarNom();
    this.validarEmail();
    this.validarUser();
    this.validarPassword();

    if(this.nombreCom.length == 0 || this.email.length == 0 ||this.user.length == 0 || this.contrasena.length == 0 ||  this.regionSeleccionado == 0 || this.comunaSeleccionada == 0){
      this.valiCamposVacidos = this.helper.showAlert(" Complete todos los campos para continuar"," Datos del usuario incompletos");
    }else{

    const regi = this.regiones.find(region => region.id === this.regionSeleccionado);
    const nomregi = regi ? regi.nombre : "region no encontrada"

    const comu = this.comunas.find(comuna => comuna.id === this.comunaSeleccionada);
    const nomcomu = comu ? comu.nombre : "comuna no encontrada"
    
    const loader = await this.helper.showLoading("Cargando");

    try{
      const request = await this.auth.createUserWithEmailAndPassword(this.email,this.contrasena);
      var user = [{
        Nombre:this.nombreCom,
        Usuario:this.user,
        Password:this.contrasena,
        Email:this.email,
        Region:nomregi,
        Comuna:nomcomu
      }]
      
      this.storgeUser.agregarUser(user);
      await this.helper.showAlert("Usuario creado correctamente","Informacion");
      await this.router.navigateByUrl("login");
      await loader.dismiss();
    }catch(error:any){
      if(error.code == 'auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("Error en el formato del correo","Error");
      }
      if(error.code == 'auth/weak-password'){
        await loader.dismiss();
        await this.helper.showAlert("Error del largo de la contraseña ","Error");
        
        }

      }
    }

  }

}
