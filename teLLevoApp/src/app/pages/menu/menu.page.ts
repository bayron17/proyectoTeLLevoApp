import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import type { Animation } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  menuArray:Menu[]=[]

  constructor(private router:Router,private animationCtrl: AnimationController) { }

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

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(document.querySelectorAll("ion-card"))
      .duration(500)
      .iterations(1)
      .fromTo('transform', 'translateX(500px)', 'translateX(0px)')
      .fromTo('opacity', '0', '1');
  }

  play(){
    this.animation.play();
  }

  ngOnInit() {
    this.cargarMenu();
  }

  ionViewWillEnter(){
    this.play();
  }

  logOut(){
    this.router.navigateByUrl("login");
  }

}