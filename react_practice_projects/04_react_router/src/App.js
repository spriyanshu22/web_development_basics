import Layout from './Layout';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
