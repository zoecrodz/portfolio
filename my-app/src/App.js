import style from './styles/app.module.css';
import Welcome from './components/Welcome'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  const [english, setEnglish] = useState(false)

  return (
    <div className={style.container}>
      <Navbar english={english}/>
      <Welcome english={english}/>
      <AboutMe english={english}/>
      <Skills english={english}/>
      <Projects english={english}/>
      <Contact english={english}/>
      <Footer english={english}/>
    </div>
  );
}

export default App;
