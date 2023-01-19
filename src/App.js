import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

//Concept implememted React Router and Lazy Loading
const ComponentA = lazy(() => import('./ComponentA'));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
        <Route path="/employeeList" component={ComponentA} />
        <Route
            path="/"
            exact
            render={() => (
            <div>
              <a href="/employeeList">Click here to view Employee List</a>
            </div>
            )}
        />
        </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
