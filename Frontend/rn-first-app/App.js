import React from "react";
import { Provider } from "react-redux";
import Main from "./components/Navigation";
import configureStore from "./store";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
