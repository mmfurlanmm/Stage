import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService : AuthService) { }

  identifiant : string;
  motDePasse : string;

  idBDD = "aze";
  mdpBDD = "qsd"



  connexionOk() : boolean {
    if(this.identifiant==this.idBDD && this.motDePasse==this.mdpBDD) {
    this.router.navigate(['liste']);
    this.authService.isAuth = true;
    console.log(this.authService.isAuth);
    return this.authService.isAuth;
    }
    else {
    alert("Identifiant ou mot de passe incorrect");
    this.identifiant = null;
    this.motDePasse = null;
    }
    
   }

  ngOnInit() {
    console.log(this.authService.isAuth);
  }

}
