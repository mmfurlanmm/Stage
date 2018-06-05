import { Article } from './article';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  ARTICLES: Article[] = [
    { nom: 'Imprimante', emplacement: 'A2', qte: 10, commentaire: 'Jamais vu une imprimante aussi cool'},
    { nom: 'Ecran', emplacement: 'B4', qte: 15, commentaire: 'Meilleur écran au monde' },
    { nom: 'Souris', emplacement: 'B5', qte: 12, commentaire: 'Une souris verte qui courrait dans l\'herbe'},
    { nom: 'Clavier', emplacement: 'C7', qte: 9, commentaire: 'Clavier au top' },
    { nom: 'Enceinte', emplacement: 'A5', qte: 3, commentaire: 'Un son trop cool' },
    { nom: 'Scanner', emplacement: 'C2', qte: 30, commentaire: 'Comme dans le film mais sans les têtes qui explosent' }
  ];

  selectedArticle: Article =  {
    nom: '',
    emplacement: '',
    qte: 0,
    commentaire: ''
  };
  selectedArticleIndex : number = 0;

  modifOnGoing = false;

  saveArticlesToServer() {
    this.httpClient
    .put('https://bddangular.firebaseio.com/articles.json', this.ARTICLES )
    .subscribe(
      () => {
        console.log('Enregistrement OK');
      },
      (error) => {
        console.log('erreur emission' + error);
      }
    );
  }

  getArticlesFromServer() {
    this.httpClient
    .get<any[]>('https://bddangular.firebaseio.com/articles.json')
    .subscribe(
      (response) => {
        this.ARTICLES = response;
      },
      (error) => {
        console.log('erreur reception' + error);
      }
    );
  }


  constructor(private httpClient: HttpClient ) { }
}
