// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React, { useState, useEffect } from "react";
import "./App.css";
import * as microsoftTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from "./Tab";
import Event from "./Event";
import Attendance from "./Attendance";
import CalendarView from "./CalendarView";
import AppContext from "../contexts/AppContext";

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {
  const [page, changePage] = useState("attendance");

  // Check for the Microsoft Teams SDK object.
  if (microsoftTeams) {
    // Set app routings that don't require microsoft Teams
    // SDK functionality.  Show an error if trying to access the
    // Home page.
    if (window.parent === window.self) {
      return (
        <>
          <AppContext.Provider value={changePage}>
            <Router>
              <Header />
              <Route exact path="/attendance" component={Attendance} />
              <Route exact path="/calendar" component={CalendarView} />
              <Route exact path="/event" component={Event} />
              <Route exact path="/termsofuse" component={TermsOfUse} />
              <Route exact path="/tab" component={TeamsHostError} />
            </Router>
          </AppContext.Provider>
        </>
      );
    }

    // Initialize the Microsoft Teams SDK
    microsoftTeams.initialize();

    // Display the app home page hosted in Teams
    return (
      <Router>
        <Route exact path="/tab" component={Tab} />
      </Router>
    );
  }

  // Error when the Microsoft Teams SDK is not found
  // in the project.
  return <h3>Microsoft Teams SDK not found.</h3>;
}

/**
 * This component displays an error message in the
 * case when a page is not being hosted within Teams.
 */
class TeamsHostError extends React.Component {
  render() {
    return (
      <div>
        <h3 className="Error">Ready to debug your app within Teams...</h3>
      </div>
    );
  }
}

export default App;
