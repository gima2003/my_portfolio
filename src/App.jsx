import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home.jsx';
import Skills from './component/Skills.jsx';
import Education from './component/Education.jsx';
import Projects from './component/Projects.jsx';

import Contact from "./component/Contact";
import Footer from "./component/Footer";


function App() {
  const [count, setCount] = useState(0)

   return (
   <>
      
      <Home />
      <Skills />
      <Education />
      <Projects />
       <Contact />
       <Footer />
    </>
  );
}

export default App
