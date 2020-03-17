import { Component } from '@angular/core';

@Component({
	selector: 'mi-componente',
	templateUrl: './mi-componente.component.html'

	 
})

export class MiComponente {
	
	public titulo: string;
	public comentario: string;
	public year: number;
	public mostrarPeliculas: boolean;

	constructor(){
		this.titulo = "Titulo de propiedad public title interpolado";
		this.comentario = "Comentario de la propiedad public comentario interpolado";
		this.year = 2019;
		this.mostrarPeliculas = true;
		console.log("Componente funcionando");
		console.log(this.titulo, this.comentario, this.year);
	}

	ocultarPeliculas(){
		this.mostrarPeliculas = false;
	}
	
	
}
