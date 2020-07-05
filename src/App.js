import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './components/Events';
import Home from './components/Home'
import drinksText from './assets/drinks-text.png'

function App() {

  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#DBB561"}}>
          <Link className="navbar-brand" to="/"><img src={drinksText} width="100" height="30" alt="logo"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="Events">Events</Link>
            </div>
          </div>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
    
}

export default App;
