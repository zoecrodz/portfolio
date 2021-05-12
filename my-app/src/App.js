import style from './styles/app.module.css';
import Welcome from './components/Welcome'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className={style.container}>
      <Navbar />
      <Welcome id={'home'}/>
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
