import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import Layout from './Layout.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

/*
************************React Router************************
Things Learned:
1) Routing in React and using Outlet to render child components and do nested routing
2) Using NavLink to navigate between different routes
3) Using useParams to get the parameters from the URL into the component
4) Using useLoaderData to fetch data from API and display it
*/


const router = createBrowserRouter(
  createRoutesFromElements(
    //  here Layout is the parent component and Home, About, Contact, User are the child components, the outlet in Layout.jsx is used to render the child components
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />  
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:username" element={<User/>} />
      <Route path="github" 
        loader={githubInfoLoader} // Loader function to API data
      element={<Github/>} />
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
