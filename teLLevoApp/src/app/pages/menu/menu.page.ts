import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuArray:Menu[]=[]

  constructor(private router:Router) { }

  cargarMenu(){
    this.menuArray.push(
      {
        id:1,
        titulo:"solicitar",
        url:"/solicitar",
        icono:"chevron-forward-outline"
      },
      {
        id:2,
        titulo:"disponibilidad",
        url:"/disponibilidad",
        icono:"chevron-forward-outline",
      }
    );
  }

  ngOnInit() {
    this.cargarMenu();
  }

  logOut(){
    this.router.navigateByUrl("login");
  }

}
