import * as redux from 'redux';

import { profileReducer } from '@app-reducers/auth';

export default (function () {
  let store;

  return () => {
    if (store) {
      return store;
    }

    let reducer = redux.combineReducers({
      profile: profileReducer,
      photographs: () => 2,
    });

    store = redux.createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
     );

    return store;
  };
}());
