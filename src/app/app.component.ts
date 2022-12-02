import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = false;

  listNoticias: any[] = [];

  title = 'app-noticias';

  constructor(private _noticiasService: NoticiasService) { }

  buscarNoticias(parametro: any){
    this.loading = true;
    this.listNoticias =[];

    setInterval(()=>{
      this._noticiasService.getNoticias(parametro).subscribe( ({articles}) =>{
        this.loading = false;
        this.listNoticias = articles;
      }, error =>{
        console.log(error);
        this.loading = false;
      })
    },1000)

    
  }
}
