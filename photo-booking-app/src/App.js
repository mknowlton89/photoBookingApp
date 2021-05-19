import React, { useState } from 'react';
// import AppointmentContext from './utils/AppointmentContext';
import { EnterAddress } from "./components/EnterAddress/EnterAddress";
import { Confirmation } from './components/Confirmation/Confirmation';
import { SelectDate } from './components/SelectDate/SelectDate';
import { SelectTime } from './components/SelectTime/SelectTime';
import { ClientInfo } from './components/ClientInfo/ClientInfo';
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
  const [appointmentData, setAppointmentData] = useState({
    street: 'Test',
    city: '',
    state: '',
    zip: '',
    date: '',
    timeSlot: '',
    firstName: '',
    lastName: '',
    email: '',
    realtor: false
  })

  console.log(appointmentData);


  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/book">
          <EnterAddress appointmentData={appointmentData} setAppointmentData={setAppointmentData} />
        </Route>
        <Route exact path="/book/date">
          <SelectDate appointmentData={appointmentData} setAppointmentData={setAppointmentData} />
        </Route>
        <Route exact path="/book/date/time">
          <SelectTime appointmentData={appointmentData} setAppointmentData={setAppointmentData} />
        </Route>
        <Route exact path="/book/date/time/info">
          <ClientInfo appointmentData={appointmentData} setAppointmentData={setAppointmentData} />
        </Route>
        <Route exact path="/book/date/time/info/confirm">
          <Confirmation appointmentData={appointmentData} setAppointmentData={setAppointmentData} />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
