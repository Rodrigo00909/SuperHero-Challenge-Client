import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home/Home';
import Search from './components/Search/Search';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/search' component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
