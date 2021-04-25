import React from 'react';
import {Switch, HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Home} from './pages/home';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
