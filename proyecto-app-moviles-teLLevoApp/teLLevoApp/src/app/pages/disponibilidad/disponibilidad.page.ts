import { Component, OnInit } from '@angular/core';
import { disponibilidad } from 'src/app/models/disponibilidad';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.page.html',
  styleUrls: ['./disponibilidad.page.scss'],
})
export class DisponibilidadPage implements OnInit {

  disponibilidadArray:disponibilidad[]=[]

  constructor() { }

  cargarDisponibilidad(){
    this.disponibilidadArray.push(
      {
        patente: "GS BB 20",
        modelo: "Citroen c4",
        destino: "Av Vickuña Mackenna 4917",
        cPasajeros: 1,
        conductor: "Armando Mochas",
        costo:3000
      },
      {
        patente: "GG EZ 15",
        modelo: "Toyota trueno ae86",
        destino: "Av Irarrazaval 2928",
        cPasajeros: 2,
        conductor: "Armando Mochas",
        costo:3000
      }
    )
  }

  ngOnInit() {
    this.cargarDisponibilidad();
  }

}
