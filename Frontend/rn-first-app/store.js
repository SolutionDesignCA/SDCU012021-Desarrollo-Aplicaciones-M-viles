import { createStore } from "redux";
import reducer from "./reducers";

const configureStore = () => createStore(reducer);

export default configureStore;
