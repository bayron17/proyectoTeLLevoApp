import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-envo-correo',
  templateUrl: './envo-correo.page.html',
  styleUrls: ['./envo-correo.page.scss'],
})
export class EnvoCorreoPage implements OnInit {

  constructor(private router:Router,
              private activatedRoute:ActivatedRoute
    ) { }

  parametroUrl:number | undefined;


  ngOnInit() {
    this.parametroUrl = this.activatedRoute.snapshot.params["num4"];
    console.log("parametro: ", this.parametroUrl);
  }

 logOut(){
  this.router.navigateByUrl(":num2/recuperar-password")
 }
}
