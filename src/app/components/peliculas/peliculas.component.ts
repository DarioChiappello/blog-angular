import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

	public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) {
  		this.titulo = "Componente películas";
  		this.peliculas = this._peliculaService.getPeliculas();
      this.fecha = new Date();
   }

  ngOnInit() {
  	console.log("OnInit");
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck() {
  	console.log("DoCheck");

  }

  cambiarTitulo() {
  	this.titulo = "El titulo ha sido cambiado";
  }

 ngOnDestroy() {
 	console.log("(OnDestroy)");
 }

 mostrarFavorita(event){
  this.favorita = event.pelicula;
 }

}
