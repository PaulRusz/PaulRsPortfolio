
// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<AboutMe />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Portfolio" element={<Portfolio />} />
        <Route path="Resume" element={<Resume />} />
      </Route>
    </Routes>
  </Router>
);






//import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// // import 'bootstrap/dist/css/bootstrap.min.css';

// // Brings in the pages the router will use to conditionally show the appropriate views
// import AboutMe from './pages/AboutMe';
// import Contact from './pages/Contact';
// import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <AboutMe />,
//       },
//       {
//         path: 'Contact',
//         element: <Contact />,
//       },
//       {
//         path: 'Portfolio',
//         element: <Portfolio />,
//       },
//       {
//         path: 'Resume',
//         element: <Resume />,
//       }
//     ]
//   }
// ])


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <RouterProvider router={router} />
// )
