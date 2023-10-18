import { Component, OnInit } from '@angular/core';
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
  constructor(private helper:HelperService,
              private storageAuto:StorageAutosService) { }

  ngOnInit() {
    this.viewAuto();
  }

async viewAuto(){
  console.log("Vheiculo:",await this.storageAuto.obtenerAuto());
}

  async agregaV(){
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
