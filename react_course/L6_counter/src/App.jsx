import { useState } from 'react'
import './App.css'

/*
function App() {
  let counter = 15;

  const increment = () => {
    counter += 1;
    console.log('Incremented');
  }

  

  return (
    <>
      <h1>React Counter Lecture 6</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick = {increment}
      >Increment</button>
      <button
      onClick = {() => {
        counter -= 1;
        console.log('Decremented');
      }}
      >Decrement</button>
      <p>Footer: </p>
    </>
  )
}
*/
// now using this App function everthing works fine and the counter value is incremented and decremented
// but the value of the counter is not updated in the UI
// this is because the value of the counter is not updated in the UI and for that we need to use the useState hook
// now when we use the useState hook the page will be re-rendered whenever the state of the counter is changed

function App() {
  const [counter, setCounter] = useState(0);
  // counter: variable , setCounter: function to update the counter, 0: initial value of the counter

  const increment = () => {
    setCounter(counter + 1);
    
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // multiple calls to setCounter will not update the counter multiple times 
    // this is because the setCounter function is asynchronous and batches the updates

    // but if we want to update the counter multiple times then we can use the following syntax
    // setCounter((prevCounter) => {
    //   return prevCounter + 1;
    // })
    // this will update the counter multiple times

  }

  return (
    <>
    <h1>React Counter Lecture 6</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick = {increment}  // if we use increment() then the counter will be updated only once that is when the page is loaded
      >Increment</button>
      <button
      onClick = {() => {
        setCounter(counter - 1);
      }}
      >Decrement</button>
      <p>Footer: </p>
      </>
  )

}

export default App
