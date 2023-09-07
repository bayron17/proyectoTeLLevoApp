import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.page.html',
  styleUrls: ['./solicitar.page.scss'],
})
export class SolicitarPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  botonSolicitar(){
    this.router.navigateByUrl("confirmacion-solicitud");
  }

}
