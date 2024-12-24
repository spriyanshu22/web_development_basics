import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'



// Now as studied in the create custom react course we can create a custom react element and render it in the root element
 const reactElement = {
    type: 'a',
    children: 'Welcome to Custom React',
    props: {
        className: 'container',
        href: 'https://google.com',
        color: 'blue',
        size: '35px'
    }
  }

  function MyCustomApp() {
    return (
      <div>
        <h1> My custom app called </h1>
        <a href="https://google.com" className="container" color="blue" size="35px"> Welcome to Custom React </a>
      </div>
    )
  }
  
  const CustomReactElement = React.createElement(
    'a', 
    { href: 'https://google.com', className: 'container', color: 'blue', size: '35px' }, 
    'Welcome to Custom React'
  )

  // Note that the order of arguments is fixed in the React.createElement method
  // 1. type of the element  2. props of the element  3. children of the element 
  const CustomReactElement2 = React.createElement(
    reactElement.type, 
    reactElement.props, 
    reactElement.children
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />

    // <MyCustomApp />
    
    // /* CustomReactElement */
    
    CustomReactElement2
    
 
    // <MyCustomApp />
    // <App /> 
    // </>

  // </React.StrictMode>,
)

// Note: When in javascript we have to inject some node Element we use document object to create a root element and then render the element in the root element
// Note: The ReactDOM.createRoot() method is used to create a root object that can be used to render React elements. 
// This method takes the HTML text element as an argument and returns a root object.
