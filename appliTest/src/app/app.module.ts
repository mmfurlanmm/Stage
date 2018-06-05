import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { ListeComponent } from './liste/liste.component';
import { listenToElementOutputs } from '@angular/core/src/view/element';
import { DetailsComponent } from './details/details.component';

import { ArticlesService } from './articles.service';
import { AuthService } from './auth.service';



const appRoutes : Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'liste', component: ListeComponent},
  {path: 'ajouter', component: AjouterComponent},
  {path: 'details', component: AjouterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AjouterComponent,
    ListeComponent,
    DetailsComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ArticlesService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
