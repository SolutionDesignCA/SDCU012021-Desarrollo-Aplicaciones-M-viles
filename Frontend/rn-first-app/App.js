import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Main from "./components/Navigation";
import configureStore from "./store";

const store = configureStore();

const App = () => {
  // const [networkConnection, setNetworkConnection] = useState(false);

  // useEffect(() => {
  //   // setNetworkConnection(NetInfo.addEventListener())
  //   NetInfo.addEventListener(_handleConnectivityChange);
  // }, []);

  // const _handleConnectivityChange = (state) => {
  //   setNetworkConnection({});
  // };

  // To unsubscribe to these update, just use:
  // unsubscribe();

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
