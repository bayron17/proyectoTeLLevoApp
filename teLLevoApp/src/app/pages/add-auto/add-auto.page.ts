import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';
import { StorageAutosService } from 'src/app/service/storage-autos.service';

@Component({
  selector: 'app-add-auto',
  templateUrl: './add-auto.page.html',
  styleUrls: ['./add-auto.page.scss'],
})

export class AddAutoPage implements OnInit {
   marca:string = "";
   modelo:string = "";
   patente:string = "";
   color:string = "";
   capacidad:string="";
   duenio:string = "";
   anio:string = "";

   ValiCamposVacio:any = "";
   Validacionmarca:string="";
   Validacionmodelo:string = "";
   Validacionpatente:string = "";
   Validacioncolor:string = "";
   Validacioncapacidad:string="";
   Validacionduenio:string = "";
   Validacionanio:string = "";

  constructor(private helper:HelperService,
              private storageAuto:StorageAutosService,
              private router:Router) { }

  ngOnInit() {
    this.viewAuto();
  }
  logOut(){
     this.router.navigateByUrl("num8/menu");
  }

  async viewAuto(){
  console.log("Vheiculo:",await this.storageAuto.obtenerAuto());
  }

  validarMarca(){
    if(this.marca.length < 2){
      this.Validacionmarca = "Marca invalida";
      this.marca="";
    }else{
      this.Validacionmarca = "";
    }
  }

  validarModelo(){
    if(this.modelo.length < 1){
      this.Validacionmodelo = "Modelo no valido";
      this.modelo="";
    }else{
      this.Validacionmodelo = "";
    }
  }

  validarPatente(){
    if(this.patente.length < 6 || this.patente.length > 6){
      this.Validacionpatente= "Patente invalida";
      this.patente="";
    }else{
      this.Validacionpatente = "";
    }
  }

  validarColor(){
    if(this.color.length <= 3){
      this.Validacioncolor= "Color invalido";
      this.color="";
    }else{
      this.Validacioncolor = "";
    }
  }

  validarCapacidad(){
    if(this.capacidad.length < 1){
      this.Validacioncapacidad = "Capacidad no permitida";
      this.capacidad="";
    }else{
      this.Validacioncapacidad = "";
    }
  }

  validarDuenio(){
    if(this.duenio.length <= 6){
      this.Validacionduenio = "Nombre invalido";
      this.duenio="";
    }else{
      this.Validacionduenio = "";
    }
  }

  validarAnio(){
    if(this.anio.length <4 ||this.anio.length > 4){
      this.Validacionanio = "Año invalido";
      this.anio="";
    }else{
      this.Validacionanio = "";
    }
  }
  async agregaV(){
    this.validarMarca();
    this.validarModelo();
    this.validarPatente();
    this.validarColor();
    this.validarCapacidad();
    this.validarDuenio();
    this.validarAnio();

    if(this.marca.length == 0|| this.modelo.length == 0|| this.patente .length== 0|| this.color.length == 0|| this.capacidad.length == 0|| this.duenio.length  == 0 || this.anio.length == 0){
      this.ValiCamposVacio = this.helper.showAlert("Complete todos los campos solicitado para continuar","Campo incompleto");
    }else{
      const loader = await this.helper.showLoading('Cargando');
      try{
        var veh = [
                    {
                      marca:this.marca,
                      modelo:this.modelo,
                      patente:this.patente,
                      color:this.color,
                      capacidad:this.capacidad,
                      duenio:this.duenio,
                      anio:this.anio
                    }
                  ]
  
        this.storageAuto.agregarVehiculo(veh);
        console.log("vehicuklo agregado");
  
        loader.dismiss();
      }catch(error:any){
  
      }
    }
  }


}
