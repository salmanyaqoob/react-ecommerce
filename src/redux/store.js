import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
// import thunk from "redux-thunk";

import creatSagaMiddleware from "redux-saga";
import rootReducer from "./root-reducer";

import rootSaga from "./root-saga";

const sagaMiddleware = creatSagaMiddleware();
//thunk
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
