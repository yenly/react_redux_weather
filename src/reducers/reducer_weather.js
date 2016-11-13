import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // instead of using .push, use .concat to return a new array
      // which includes old arrary with new
      //return state.concat([action.payload.data]);
      // es6 syntax ... means to take array and flatten it out
      // inserts at the front of array
      return [ action.payload.data, ...state ]; // [city, city, city]
  }
  return state;
}
