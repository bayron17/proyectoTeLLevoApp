import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LocacionService } from 'src/app/service/locacion.service';
import { Region } from 'src/app/models/region';
import { Comuna } from 'src/app/models/comuna';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
 
  email:string = " ";
  contrasena:string = " ";

  regiones:Region[] = [];
  comunas:Comuna[] = [];
  regionSeleccionado:number = 0;
  comunaSeleccionada:number = 0;
  
  constructor(private router:Router,
              private auth:AngularFireAuth,
              private activatedRoute:ActivatedRoute,
              private helper:HelperService,
              private locationService:LocacionService     
              ) { }

  parametroUrl:number | undefined;  


  ngOnInit() {
    this.parametroUrl = this.activatedRoute.snapshot.params["num2"];
    console.log("parametro: ", this.parametroUrl);
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

  async registro(){
    const loader = await this.helper.showLoading("Cargando");
    try{
      const request = await this.auth.createUserWithEmailAndPassword(this.email,this.contrasena);
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
