import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";

// Import pages
import Page404 from "./pages/auth/Page404";
import Login from "./pages/auth/login";
import Main from "./pages/auth/main";

// Dashboard
import Dashboard from "./pages/dashboard";

// Create router

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      {/* Auth pages */}
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      {/* Dashboard views */}
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
