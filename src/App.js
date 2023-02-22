import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import QuizPage from "./components/QuizPage";
import ReportCard from "./components/ReportCard";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignUpPage} />
          <Route path="/quiz" exact component={QuizPage} />
          <Route path="/report" exact component={ReportCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
