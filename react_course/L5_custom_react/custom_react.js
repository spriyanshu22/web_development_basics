
// predefining the react element properties
const reactElement = {
    type: 'a',
    children: 'Welcome to Custom React',
    props: {
        className: 'container',
        href: 'https://google.com',
        color: 'red',
        size: '40px'
    }
}

// Function to render the elements
function renderElements(element, container) {
    // Creating the container element
    const domElement = document.createElement(element.type)
    domElement.innerHTML = element.children

    // can also use loop to set multiple attributes using key value pairs of props
    domElement.setAttribute('href', element.props.href)
    domElement.setAttribute('class', element.props.className)
    domElement.style.color = element.props.color
    domElement.style.fontSize = element.props.size

    // Appending the container element to the root
    container.appendChild(domElement)
}

renderElements(reactElement, document.querySelector('#root'))

/*

Here we have a data for a react element which is an object with three properties: type, children, and props. 
Now we have a function renderElements which takes two arguments: element and container.
This takes the data from the reactElement object and creates a new element with the type of the reactElement object.


Now we can relate this to the React code we have written in the previous lessons.
In the React code, we have a function App which returns a JSX element.

*/

// now the react elemnts can be also created by object instead of functions with the help of createElement function provided by React
