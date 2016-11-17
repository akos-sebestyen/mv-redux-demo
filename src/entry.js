require('bootstrap');
require('./styles/style.scss');

import reducer from './reducer';
import ngRedux from 'ng-redux';
import CounterController from './CounterController';

angular.module('app', [ngRedux])
  .config(($ngReduxProvider) => {
    $ngReduxProvider.createStoreWith(reducer);
  })
  .controller('CounterController', CounterController);