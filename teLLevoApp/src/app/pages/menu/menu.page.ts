import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { IonCard , AnimationController, MenuController} from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  menuArray:Menu[]=[]

  user:any;

  public aaa:any[]=[]
  constructor(private router:Router,
              private animationCtrl: AnimationController,
              private auth:AngularFireAuth, 
              private menuCtrl:MenuController,
              ) { }

  cargarMenu(){
    let paramSoli = 15161718;
    let paramDis = 19202122;
    let paramAddCar = 23242526;
    this.menuArray.push(
      {
        id:1,
        titulo:"solicitar",
        url:"/"+ paramSoli + "/solicitar",
        icono:"chevron-forward-outline"
      },
      {
        id:2,
        titulo:"disponibilidad",
        url:"/"+ paramDis + "/disponibilidad",
        icono:"chevron-forward-outline",
      },
      {
        id:3,
        titulo:"agregar Auto",
        url:"/"+ paramAddCar + "/add-auto",
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
    this.mostrarUser();
  }

  ionViewWillEnter(){
    this.play();
  }

  async logOut(){
    await this.auth.signOut();
     this.router.navigateByUrl("login");
  }

  async salir(){
    await this.auth.signOut();
  }

  cerrarMenu(){
    this.menuCtrl.close();
  }

  toggle(){
    this.menuCtrl.toggle();
  }

  perfil(){
    this.router.navigateByUrl('perfil');
  }

//  traemos al usuario
async mostrarUser() {
  await this.auth.onAuthStateChanged((user) => {
    const eee = user?.email;
    if(!this.aaa.length){
      this.aaa.push(eee);
      console.log(this.aaa);
    }else{
      this.aaa = [];
      // this.aaa[0] =
       this.aaa.push(eee)
    }
   
    

  //  console.log("222222",this.user.filter((e: { Email: string | null | undefined; }) => e.Email == user?.email));
  });
}
}