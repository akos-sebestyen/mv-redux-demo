require('bootstrap');
require('./styles/style.scss')
import { createStore } from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(counter);

const render = () => {
  document.getElementById('count-display').innerHTML = store.getState();
};

store.subscribe(render);
render();

document.getElementById('increment-count').addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});

document.getElementById('decrement-count').addEventListener('click', () => {
  store.dispatch({ type: 'DECREMENT' });
});