import './App.css'

import AboutMe from './componets/AboutMe';
import Contact from './componets/Contact';
import Header from './componets/Header';
import Navbar from './componets/Navbar';
import Portfolio from './componets/Portfolio';
import Resume from './componets/Resume';


function App() {
  return (
    <div>

      <Header />
      <Navbar />  
      <AboutMe />
      <Contact />
      <Portfolio />
      <Resume />

    </div>
  )
}




export default App
