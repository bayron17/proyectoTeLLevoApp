import { Component, OnInit } from '@angular/core';
import { disponibilidad } from 'src/app/models/disponibilidad';
import { StorageAutosService } from 'src/app/service/storage-autos.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.page.html',
  styleUrls: ['./disponibilidad.page.scss'],
})
export class DisponibilidadPage implements OnInit {

  disponibilidadArray:any;
  constructor(private storageAuto:StorageAutosService) { }

  async cargarDisponibilidad(){
    this.disponibilidadArray = await this.storageAuto.obtenerAuto();
    console.log("Mostrar Vehiculo:",await this.disponibilidadArray);
  }

 
  ngOnInit() {
    this.cargarDisponibilidad();
  }

}
