import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import Detail from "./components/Detail";
import NoneFound from "./components/NoneFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/movies/:id" component= {Detail} />
            <Route component = {NoneFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
