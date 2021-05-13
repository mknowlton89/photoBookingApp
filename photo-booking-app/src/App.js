import React from 'react';
import { BookAppointment } from './screens/BookAppointment/BookAppointment';
import { Dashboard } from './screens/Dashboard/Dashboard';
import { Login } from './screens/Login/Login';
import { Signup } from './screens/Signup/Signup';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/book">
          <BookAppointment />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
