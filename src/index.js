import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/layout/BaseLayout'
import Cart from './components/Cart'
import cartReducer from './reducers/cartReducer'

let store = createStore(cartReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/Cart" component={Cart}/>
          <Route component={App}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


