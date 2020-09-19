import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { incrementar, decrementar, multiplicar, dividir } from './contador.actions';


// export function contadorReducer(state: number = 10, action: Action) {

//   switch (action.type) {

//     case incrementar.type:
//       return state + 1;

//     case decrementar.type:
//       return state - 1;

//     default:
//       return state;
//   }
// }


export const initialState = 20;

const _contadoReducer = createReducer(
  initialState,
  on(incrementar, state => state + 1),
  on(decrementar, state => state - 1),
  on(multiplicar, (state, { numero }) => state * numero),
  on(dividir, (state, { numero }) => state / numero)
  );

export function contadorReducer(state, action) {
  return _contadoReducer(state, action);
}
