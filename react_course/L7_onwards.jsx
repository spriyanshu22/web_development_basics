// L2: Roadmap

/*
Reason to use: makes easy to build complex frontend applications
Core language: JavaScript
Reason for build: Ghost message problem by facebook
React is a library and not a framework

*/



// L7: Virtual DOM, Fibre and reconciliation

// Each time on updating if we re-render the entire DOM then it will be very slow// So, React uses Virtual DOM
// Virtual DOM is a lightweight copy of the actual DOM
// React compares the Virtual DOM with the actual DOM and only updates the changes

// Reconcialiation is the process of comparing the Virtual DOM with the actual DOM and updating the changes
// React uses a data structure called Fibre to perform reconciliation

// Fibre is a tree data structure that represents the component tree
// React uses Fibre to perform reconciliation

// Rerenndering the entire DOM is very slow

// The reason react can be made fast because here rerenndering and reconciliation are two different things

// Fibre enables React to pause and resume the reconciliation process
// Assigns priority to different types of work
// Reuse previously completed work
// Abort work if it is no longer needed



// L8: Tailwind and Props in React JSX

// installing and configuring tailwindcss



