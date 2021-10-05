//"build": "react-scripts build",

import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

// we will track the current id from this component because
// this is the only component were post and form component are there
// and we need current id for both post and form to update data
// without redux we need to bring all the thing in app component

const App = () => {

  return (
    <>
      <Router>
        <Container maxidth="lg">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </Container>
      </Router>

    </>
  )
}

export default App;