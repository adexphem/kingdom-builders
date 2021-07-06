import React, { useEffect, useState, Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { theme } from "./stylesheets/theme";
import { LOGIN, INDEX } from "./config/paths";

import Login from "./pages/UserAuth";
import NavBar from "./pages/UserAuth/NavBar";
import Dashboard from "./pages/Dashboard";

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
        {isLoginPage && <NavBar />}

        <Fragment>
          <Switch>
            <Route exact path={[`${INDEX}`, `${LOGIN}`]} component={Login} />
            <Route exact path="/dash" component={Dashboard} />
            <Route exact path="/kingdom_builders" component={Dashboard} />
          </Switch>
        </Fragment>
      </Router>
    </ThemeProvider>
  );
};

export default App;
