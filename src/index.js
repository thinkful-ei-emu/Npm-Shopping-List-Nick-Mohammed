import 'normalize.css';
import $ from 'jquery';
import api from './api';
import './index.css';
import shoppingList from './shopping-list';
import store from './store';
/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});

