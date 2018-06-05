import { ArticlesService } from './../articles.service';
import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {


  inputArticle: Article = {
    nom: '',
    emplacement: '',
    qte: 0,
    commentaire: ''
  };



  addArticle() {
    this.articleService.ARTICLES.push(this.inputArticle);
    alert('article enregistré');
    this.inputArticle = {
      nom: '',
      emplacement: '',
      qte: 0,
      commentaire: ''
    };
    //this.articleService.saveArticlesToServer();
    this.router.navigate(['liste']);

  }

  getArticleToModify() {
    this.inputArticle = {
      nom: this.articleService.selectedArticle.nom,
      emplacement: this.articleService.selectedArticle.emplacement,
      qte: this.articleService.selectedArticle.qte,
      commentaire: this.articleService.selectedArticle.commentaire
    };



  }

  modificationOK(): boolean {
    if (this.inputArticle.nom == this.articleService.selectedArticle.nom &&
      this.inputArticle.emplacement == this.articleService.selectedArticle.emplacement &&
      this.inputArticle.qte == this.articleService.selectedArticle.qte &&
      this.inputArticle.commentaire == this.articleService.selectedArticle.commentaire)
      return true;
    else
      return false;

  }

  modifyArticleForm() {
    let conf = confirm("Voulez-vous vraiment modifier cet article ?");
    if (conf) {
      this.articleService.ARTICLES[this.articleService.selectedArticleIndex].nom = this.inputArticle.nom;
      this.articleService.ARTICLES[this.articleService.selectedArticleIndex].emplacement = this.inputArticle.emplacement;
      this.articleService.ARTICLES[this.articleService.selectedArticleIndex].qte = this.inputArticle.qte;
      this.articleService.ARTICLES[this.articleService.selectedArticleIndex].commentaire = this.inputArticle.commentaire;
      this.articleService.modifOnGoing = false;
      alert("L'article a bien été modifié");
      this.inputArticle = {
        nom: '',
        emplacement: '',
        qte: 0,
        commentaire: ''
      };
      this.router.navigate(['liste']);
      this.inputArticle = {
        nom: '',
        emplacement: '',
        qte: 0,
        commentaire: ''
      };
      //this.articleService.saveArticlesToServer();
    }
    else {
      this.inputArticle = {
        nom: this.articleService.selectedArticle.nom,
        emplacement: this.articleService.selectedArticle.emplacement,
        qte: this.articleService.selectedArticle.qte,
        commentaire: this.articleService.selectedArticle.commentaire
      };
    }

  }

  retourListe() {
    if(this.modificationOK()){
    
      this.inputArticle = {
        nom: '',
        emplacement: '',
        qte: 0,
        commentaire: ''
      };
      this.articleService.selectedArticle = {
        nom: '',
        emplacement: '',
        qte: 0,
        commentaire: ''
      };
      this.articleService.modifOnGoing = false;
      this.router.navigate(['liste']);
    }
    else {
      let conf = confirm("L'article a été modifié. Voulez-vous vraiment abandonner les modifications ?")
      if (conf) {
        this.inputArticle = {
          nom: '',
          emplacement: '',
          qte: 0,
          commentaire: ''
        };
        this.articleService.selectedArticle = {
          nom: '',
          emplacement: '',
          qte: 0,
          commentaire: ''
        };
        this.articleService.modifOnGoing = false;
        this.router.navigate(['liste']);

      }
    }
  
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


  constructor(private articleService: ArticlesService, private router: Router) { }

  ngOnInit() {
    if (this.articleService.modifOnGoing === true) {
      this.getArticleToModify();

    }
    console.log(this.articleService.modifOnGoing);

  }

}
