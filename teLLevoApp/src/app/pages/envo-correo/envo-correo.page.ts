import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envo-correo',
  templateUrl: './envo-correo.page.html',
  styleUrls: ['./envo-correo.page.scss'],
})
export class EnvoCorreoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

 logOut(){
  this.router.navigateByUrl("recuperar-password")
 }
}
