import { createStore } from "redux";
import rootReducer from "./reducers";
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
    console.log('State updated')
    console.log(store.getState())
    saveState(store.getState());
});

export default store;