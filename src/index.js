import React from 'react';
import ReactDOM from 'react-dom/client';
// CSS
import './index.css';
import './App.scss';
import './normalize.css';
import './skeleton.css';

// PAGES
import App from './App';
import BoardSetup from "./pages/BoardSetup";
import TaskSetup from './pages/TaskSetup';
import Game from "./pages/Game"

// CONTEXT
import { BingoProvider } from "./BingoContext";

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/setup",
    element: <BoardSetup />,
  },
  {
    path: "/tasks",
    element: <TaskSetup />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BingoProvider>
      <div className='container'>
      <RouterProvider router={router} />
      </div>
    </BingoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
