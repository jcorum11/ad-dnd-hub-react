import React from "react";
import { BrowserRouter as router, route, Switch } from "react-router-dom";
import Home from './pages/Home'
import Logs from './pages/Logs'
import Maps from './pages/Maps'
import Players from './pages/Players'

import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return <Router>
    <Header></Header>
  </Router>;
}

export default App;
