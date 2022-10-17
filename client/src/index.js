import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './routes/Home.js';
import Create from './routes/Create.js';
import View from "./routes/View.js";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

  }
  // {
  //   path: "/create",
  //   element: <Create />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/view",
  //   element: <View />,
  //   errorElement: <ErrorPage />,
  // }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

reportWebVitals();
