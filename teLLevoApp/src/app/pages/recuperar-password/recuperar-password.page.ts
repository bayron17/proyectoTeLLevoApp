import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/service/helper.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute,
              private auth:AngularFireAuth,
              private helperService:HelperService
              
    ) { }
  
  parametroUrl:number | undefined;

  emailRec:string = "";



  ngOnInit() {
    this.parametroUrl = this.activatedRoute.snapshot.params["num3"];
    console.log("parametro: ", this.parametroUrl);
  }

  logOut(){
    this.router.navigateByUrl("login");
  }

  envioCorreo(){
    var parametroEnvioC = 9101112;
    this.router.navigateByUrl(parametroEnvioC + "/envo-correo");
  }

  async CorreoRecuperacion(){
    console.log("entro");
    try{
        const loader = await this.helperService.showLoading("Cargando");

        await this.auth.sendPasswordResetEmail(this.emailRec);
        this.helperService.showAlert("Revise su correo para restablecer la contraseña","Correo enviado con exito");
        await loader.dismiss();

    }catch(error){
          // Error: No se pudo enviar el correo de restablecimiento de contraseña.
      this.helperService.showAlert('Error al enviar el correo de restablecimiento:', "error");
    }
  }

}
