import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './modules';

export const history = createBrowserHistory();

export default function configureStore() {
  const middlewares = [thunk, routerMiddleware(history)];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
  }

  const composed = [applyMiddleware(...middlewares)];

  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-underscore-dangle
    composed.push(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
  }

  const store = createStore(
    createRootReducer(history), // root reducer with router state
    compose(...composed),
  );

  return store;
}
