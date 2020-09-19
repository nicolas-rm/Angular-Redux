import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementar, decrementar } from './contador/contador.actions';
import { AppState } from './app.reducer';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {
    // this.contador = 10;
  }

  ngOnInit(): void {
    this.store.select('contador').subscribe((contador) => {
      console.log(contador);
      this.contador = contador;
    });
  }

  incrementar() {
    // this.contador += 1;

    this.store.dispatch(incrementar());
  }

  decrementar() {
    // if (this.contador === 0) {
    //   return;
    // } else {
    //   this.contador -= 1;
    // }
    this.store.dispatch(decrementar());
  }
}
