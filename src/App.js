import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Profil from './components/dashboard/Dash/Profil'

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/SideBar/index";

import Home from './components/layout/component/Home/Home';
import Impact from './components/layout/component/Impact/Impact';
import Risk from './components/layout/component/Risk/Risk';
import News from './components/layout/component/News/News';
import Resolve from './components/layout/component/Resolve/Resolve';
import Deforest from './components/layout/component/Deforest/Deforest';
import Sale from './components/layout/component/Sale/sale';

import Dash from './components/dashboard/Dashboard';
import Test from './components/dashboard/Dash/Actu';
import List from './components/atelier/getPub';
import Ajout from './components/atelier/publication';

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  state = {
    modal5: false, 
  }

  toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/Impact" component={Impact} />
            <Route path="/Risk" component={Risk} />
            <Route path="/news" component={News} />
            <Route path="/Resolve" component={Resolve} />
            <Route path="/Deforest" component={Deforest} />
            <Route path="/sale" component={Sale} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route path="/profil" component={Profil} />
            <Route path="/Dashboard" component={Dash} />
            <Route exact path="/actualite" component={Test} />
            <Route exact path="/List" component={List} />
            <Route exact path="/Ajout" component={Ajout} />
            <Switch>
              <PrivateRoute exact path="/Admin" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
