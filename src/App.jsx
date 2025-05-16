// Componentes
import Introduction from './components/Introduction/Introduction.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import Contact from './components/Contact/Contact.jsx'
import Clock from './components/Clock/Clock.jsx'
import Current from './components/Current/Current.jsx'
import Terminal from './components/Terminal/Terminal.jsx'
import Projects from './components/Projects/Projects.jsx'
import Project from './components/Project/Project.jsx'
// 09
// 10
// 11
import Rights from './components/Rights/Rights.jsx'

// Estilos generales
import './App.css'

// Sistema de grid
import './styles/grid/gridLayout.css'
import './styles/grid/gridAnimation.css'

// Fondo animado
import "./styles/background/background.css"
import "./styles/background/background.js"

function App() {
  return (
    <>
    <img src="src/assets/logo-white.svg" alt="Mi logo" id='mobile-logo'/>

    <main>
      
      <div className="div1">
        <Introduction />
      </div>

      <div className="div2">
        <AboutMe />
      </div>
      
      <div className="div3">
        <Contact />
      </div>

      <div className="div4">
        <Clock />
      </div>

      <div className="div5">
        <Current />
      </div>

      <div className="div7">
        <Projects />
      </div>
      
      <div className="div8">
        <Project title={"Landing Page 'Webs Elevate'"} link={"https://youtu.be/XaAiNL-YJIs?feature=shared"}/>
      </div>

      <div className="div9">
        <Project title={"Administrador de tesinas"} link={"https://youtu.be/XaAiNL-YJIs?feature=shared"}/>
      </div>

      <div className="div10">
        <Project title={"Pichicho Transportes"} link={"https://youtu.be/XaAiNL-YJIs?feature=shared"}/>
      </div>

      <div className="div11">11 | Trabajo</div>
      
      <div className="div12">
        <Rights />
      </div>

      {/* Se colocó este div al final para que esté por encima de todo al abrir la terminal */}
      <div className="div6">
        <Terminal />
      </div>
    </main>
    </>
  )
}

export default App