
import { Outlet } from 'react-router-dom';

import Header from './components/Header'
import Navbar from "./components/Navbar";

// The Outlet component will conditionally swap between the different pages according to the URL
function App() {
  return (
    <>

    <Navbar />
    <Outlet />
    <Header />
    </>
  )
}









// import './App.css'

// import AboutMe from './pages/AboutMe';
// import Contact from './pages/Contact';
// import Header from './pages/Header';
// import Navbar from './pages/Navbar';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';


// function App() {
//   return (
//     <div>

//       <Header />
//       <Navbar />  
//       <AboutMe />
//       <Contact />
//       <Portfolio />
//       <Resume />

//     </div>
//   )
// }




export default App
