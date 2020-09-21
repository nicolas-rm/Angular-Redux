import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {
  contador: number;
  // @Output() contadorCambio = new EventEmitter<number>();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      this.contador = contador;
    });
  }

  reset() {
    // this.contador = 0;
    // this.contadorCambio.emit(0);


    // Patron Redux
    this.store.dispatch(reset({numero: 0}));
  }
}
