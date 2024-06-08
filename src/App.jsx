
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer'
import Navbar from "./components/Navbar";

// The Outlet component will conditionally swap between the different pages according to the URL
function App() {
  return (
    <>

    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}


export default App
