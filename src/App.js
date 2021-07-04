import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { theme } from "./stylesheets/theme";
import { LOGIN, INDEX } from "./config/paths";

import Login from "./pages/UserAuth";
import Dashboard from "./pages/Dashboard";

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
          <nav>
            <Link to={LOGIN} className="navbar-brand">
              Login
            </Link>
          </nav>
        )}

        <div>
          <Switch>
            <Route exact path={[`${INDEX}`, `${LOGIN}`]} component={Login} />
            <Route exact path="/dash" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
