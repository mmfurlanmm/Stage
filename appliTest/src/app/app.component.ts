import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private articleService : ArticlesService, private authService : AuthService, private router : Router){
  }
  deconnect() {
    this.authService.isAuth = false;
    this.router.navigate(['home']);

  }
 
}
