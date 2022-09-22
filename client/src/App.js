import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">
                WebSiteName
              </a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">My Ads</a>
              </li>
              <li>
                <a href="#">Create Ad</a>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-user"></span> Sign Up
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="glyphicon glyphicon-log-in"></span> Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <body>
        <h1>Welcome user!</h1>
        <button type="button">Click Me!</button>
        <h3>View my ads</h3>
      </body>
    </div>
  );
}

export default App;
