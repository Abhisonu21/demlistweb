import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AddDem from "./components/addDem";
import Demlists from "./components/demlists";
import Home from "./components/home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component= {Home}/>
          <Route path="/addDem" exact component= {AddDem}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
