// NEW

import { createStore, Store, applyMiddleware, Middleware } from 'redux';
import mainReducer from './reducers';

export type RootState = ReturnType<typeof mainReducer>;

const middleware: Middleware[] = []; 

const store: Store<RootState> = createStore(
  mainReducer,
  applyMiddleware(...middleware)
);

export default store;



// OLD

// import { createStore, Store, applyMiddleware, Middleware } from 'redux';
// import rootReducer from './reducers';

// export type RootState = ReturnType<typeof rootReducer>;

// const middleware: Middleware[] = []; 

// const store: Store<RootState> = createStore(
//   rootReducer,
//   applyMiddleware(...middleware)
// );

// export default store;


