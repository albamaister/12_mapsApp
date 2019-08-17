import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;

  marcadores: Marcador[] = [];

  constructor() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }

   }

   agregarMarcador(evento) {
    const coords: {lat: number, lng: number} = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
   }

   guardarStorage() {
     localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
   }

   borrarMarcador(i: number) {
  this.marcadores.splice(i, 1);
  this.guardarStorage();
   }

  ngOnInit() {
  }

}
