import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './Layout';
import LoginComp from './components/LoginComp'; // Ensure this path is correct
import UserDetails from './components/UserDetails'; // Ensure this path is correct
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import UserContext from './context/userContext';
import UserContextProvider from './context/userContextProvider';
import App from './App';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='login' element={<LoginComp />} />
      <Route path='user' element={<UserDetails/>} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*
    wrapping the entire app with UserContextProvider in the UserContextProvider we are providing the context that we want to share among all the components
     */}
    <UserContextProvider>
      <RouterProvider router={router}/>
    </UserContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
