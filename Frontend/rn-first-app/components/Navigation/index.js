import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./TabNavigator";
import { AuthNavigator } from "./AuthNavigator";
import { Loading } from "../Loading/Loading";
import { connect } from "react-redux";
import * as selectors from "../../reducers";
import * as actions from "../../actions/auth";

const Main = ({ isAuthenticating, setIsLoading, user }) => {
  /**
   * Ya no necesitamos estado local porque lo
   * manejaremos en el estado global
   */
  // const [isLoading, setisLoading] = useState(true);

  // const [user, setUser] = useState(null);

  useEffect(() => {
    // Set isLoading
    // setTimeout(() => {
    //   setIsLoading();
    // }, 500);
    // Set User
    // setTimeout(() => {
    //   setUser({});
    // }, 1000);
  }, []);

  return (
    <NavigationContainer>
      {/* {isAuthenticating ? (
        <Loading />
      ) :  */}
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default connect(
  (state) => ({
    // isAuthenticating: selectors.getIsAuthenticating(state),
    user: selectors.getAuthUser(state),
  }),
  (dispatch) => ({
    setIsLoading() {
      // dispatch(actions.completeLogin({ usuario: "prueba" }));
    },
  })
)(Main);
