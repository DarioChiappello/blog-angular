import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{
	
	public peliculas: Pelicula[];

	constructor(){
	this.peliculas = [
			new Pelicula("The Godfather", 1972, '../../assets/css/images/godfather.jpg'),
        	new Pelicula("Harry Potter y las Reliquias de la muerte", 2011, '../../assets/css/images/hp.jpg'),
       		new Pelicula("Bohemian Rhapsody", 2019, '../../assets/css/images/bh.jpg')   

		];
	}

	holaMundo(){
		return 'Hola mundo';
	}

	getPeliculas(){
		return this.peliculas;
	}
}