import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Logs from "./pages/CapaignLogs";
import Maps from "./pages/Maps";
import Players from "./pages/Players/Players";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/logs" component={Logs} />
        <Route exact path="/maps" component={Maps} />
        <Route exact path="/players" component={Players} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
