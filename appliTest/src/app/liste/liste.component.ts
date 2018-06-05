import { ArticlesService } from './../articles.service';
import { Component, OnInit, Input } from '@angular/core';
import { Article} from './../article';
import { Router } from '@angular/router';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  constructor(private articleService: ArticlesService, private router : Router) { }

  articles: Article[];

  getArticles() {
    this.articles = this.articleService.ARTICLES;
  }

  rmArticle(index) {
    let sur = confirm("Voulez-vous vraiment supprimer cet article ?");
    if(sur== true)
    this.articleService.ARTICLES.splice(index, 1);
  }

  modifyArticle(index) {
    this.articleService.selectedArticle.nom = this.articleService.ARTICLES[index].nom;
    this.articleService.selectedArticle.emplacement = this.articleService.ARTICLES[index].emplacement;
    this.articleService.selectedArticle.qte = this.articleService.ARTICLES[index].qte;
    this.articleService.selectedArticle.commentaire = this.articleService.ARTICLES[index].commentaire;
    this.articleService.modifOnGoing = true;
    this.articleService.selectedArticleIndex = index;
    console.log(this.articleService.selectedArticle, this.articleService.modifOnGoing, this.articleService.selectedArticleIndex);
    this.router.navigate(['details']);
  }

  onSave() {
    this.articleService.saveArticlesToServer();
  }

  

  

  ngOnInit() {
    this.getArticles();
    //this.articleService.getArticlesFromServer();
  }

}
