import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {
  

  constructor(private router:Router) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigateByUrl("login");
  }

}
