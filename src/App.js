import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home/Home';
import SearchIndex from './components/Search/SearchIndex';
import Character from './components/Character/Character';


function App() {

  const url = 'https://www.superheroapi.com/api.php/4138052379586041';

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/character/:id' component={Character} />
          <Route exact path='/' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/search' component={SearchIndex} />          
        </Switch>
      </Router>
    </>
  );
}

export default App;
