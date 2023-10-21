import { StorageUserService } from 'src/app/service/storage-user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Component, ViewChild } from '@angular/core';
import { IonModal, MenuController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  user:any;

  public aaa:any[]=[]
  informacionUser:any;
  name:string=""
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';

  constructor( private storage:StorageUserService,
               private auth:AngularFireAuth,
              
               ) { }

  ngOnInit() {
    // this.mostrarUser();
  }

   async mostrarUser() {
     await this.auth.onAuthStateChanged((user) => {
       console.log("5555555555",user);
       const eee = user?.email;
       this.aaa.push(eee);
       console.log(this.aaa);
      

   console.log("222222",this.user.filter((e: { Email: string | null | undefined; }) => e.Email == user?.email));
     });

   
   
   }
}



