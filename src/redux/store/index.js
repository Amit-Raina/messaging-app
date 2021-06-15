import { createStore } from "redux";
import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()  ;

const store = createStore(rootReducer,composeEnhancers);

export default store;