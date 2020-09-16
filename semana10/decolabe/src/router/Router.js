import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomePage } from '../components/HomePage'
import { ApplicationFormPage } from '../components/ApplicationFormPage'
import { CreateTripPage } from '../components/CreateTripPage'
import { ListTripPage } from '../components/ListTripPage'
import { LoginPage } from '../components/LoginPage'
import { TripDetailsPage } from '../components/TripDetailsPage'
import { SignUpPage } from '../components/SignUpPage'



export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" > <HomePage/> </Route>
                <Route exact path="/applicationform" > <ApplicationFormPage/> </Route>
                <Route exact path="/createtrip" > <CreateTripPage/> </Route>
                <Route exact path="/listtrip" > <ListTripPage/> </Route>
                <Route exact path="/login" > <LoginPage/> </Route>
                <Route exact path="/details" > <TripDetailsPage/> </Route>
                <Route exact path="/signup" > <SignUpPage/> </Route>
                <Route> <div>ERRO 404</div> </Route>
            </Switch>
        </BrowserRouter>
    )
}




/*
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "../screens/AboutPage/AboutPage";
import HomePage from "../screens/HomePage/HomePage";
import ActivityPage from "../screens/ActivityPage/ActivityPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sobre/:linguagem">
          <AboutPage />
        </Route>
        <Route exact path="/atividade/:id">
          <ActivityPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <div>Eita Giovanna, o forninho caiu (404)</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
*/