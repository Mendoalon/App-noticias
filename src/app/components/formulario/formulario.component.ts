import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametroSelecionado = new EventEmitter<any>()

  categoriaSelecionada: string ='general'
  paisSelecionado: string ='co'

  categorias: any[]= [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deporte'},
    {value: 'technology', nombre: 'Tecnologia'}
  ]

  paises: any[]= [
    {value: 'co', nombre: 'Colombia'},
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brazil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'gb', nombre: 'Reino Unido'},
  ]



  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticias(){
    const PARAMETROS ={
      categoria: this.categoriaSelecionada,
      pais: this.paisSelecionado
    }
    
    this.parametroSelecionado.emit(PARAMETROS)
  }

}
