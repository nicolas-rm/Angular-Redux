import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { multiplicar, dividir } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador: number;
  // @Output() cambioContador = new EventEmitter<number>();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
    });
  }

  multiplicar() {
    // this.contador = this.contador * 2;
    // this.cambioContador.emit(this.contador);

    // Utilizando Patron Redux
    this.store.dispatch(multiplicar({ numero: 3 }));
  }

  dividir() {
    // this.contador = this.contador / 2;
    // this.cambioContador.emit(this.contador);

    // Utilizando Patron Redux
    this.store.dispatch(dividir({numero: 2}));
  }

  resetNieto(nuevoContador) {
    // this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }

}
