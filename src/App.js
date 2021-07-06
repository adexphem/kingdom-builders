import React, { useEffect, useState, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { theme } from "./stylesheets/theme";
import { LOGIN, INDEX } from "./config/paths";

import Login from "./pages/UserAuth";
import NavBar from "./pages/UserAuth/NavBar";
import DashLayout from "./pages/Layout";

import "./App.css";

const App = () => {
  const [isLoginPage, setIsLoginPage] = useState(false);

  useEffect(() => {
    const location = window.location.pathname;
    if (location === LOGIN || location === INDEX) {
      setIsLoginPage(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {isLoginPage && (
          <Fragment>
            {" "}
            <NavBar />
            <Fragment>
              <Switch>
                <Route exact path={[`${INDEX}`, `${LOGIN}`]} component={Login} />
              </Switch>
            </Fragment>
          </Fragment>
        )}

        {!isLoginPage && <DashLayout />}
      </Router>
    </ThemeProvider>
  );
};

export default App;
