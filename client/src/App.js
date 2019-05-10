import React from "react";
import { Provider } from './Context';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css"


import Home from "./pages/Home";
import Register from "./pages/Register";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

import LogoHeader from "./components/LogoHeader";
import NavButtons from "./components/NavButtons";

function App() {
  return (
    <Provider>
      <Router>
        <div>
          <LogoHeader />
          <NavButtons />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/about" render={ () => <About title='About' /> } />
            <Route path="/profile" component={Profile} />
            <Route component={NotFound} />
            {/* <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

//to pass props between routes 
//<Route path="/about" render={ () => <About title='About' /> } />