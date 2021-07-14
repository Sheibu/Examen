import { Component, OnInit } from '@angular/core';
import { Libros, ListaLibros } from '../../interfaces/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  Lista: Array<Libros> = ListaLibros;
  
  constructor() { }

  ngOnInit(): void {
  }

}
