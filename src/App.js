import "./App.css";
import { useState, useEffect } from "react";
import Home from "./components/home/Home";
import Manifesto from "./components/manifesto/Manifesto";
import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApePark from "./components/apePark/ApePark";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/manifesto" component={Manifesto}></Route>
          <Route path="/apePark" component={ApePark}></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
